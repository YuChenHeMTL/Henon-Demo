import { NextResponse } from 'next/server'
import convert from 'xml-js';

export async function POST(Request) {
    const body = await Request.json();
    const destination = body.destination;
    if (destination === "Quickbooks") {
        return NextResponse.json({ data: JSON.stringify(await getTrialBalanceQuickbooks(body.realmID, body.accessToken))});
    } else if (destination === "Tableau") {
        const workbooks = await getWorkbooks(body.username, body.password, body.siteName, body.baseUrl, body.siteID);
        return NextResponse.json({ data: JSON.stringify(workbooks)});
    } else if (destination === "BambooHR") {
        const employees = await getEmployees(body.apiKey, body.subdomain);
        return NextResponse.json({ data: JSON.stringify(employees)});
    } else if (destination === "Hubspot") {
        const deals = await getDeals(body.bearerToken);
        return NextResponse.json({ data: JSON.stringify(deals)});
    } else {
        return NextResponse.json({ error: "This is not a valid destination"});
    }
}

async function getTrialBalanceQuickbooks(realmID, accessToken){
    const result = await fetch("https://sandbox-quickbooks.api.intuit.com/v3/company/"+ realmID + "/reports/TrialBalance?minorversion=65", {
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + accessToken,
        }
    }).then((res) => res.json());
    return result;
}

async function getWorkbooks(username, password, siteName, baseUrl, siteID) {
    const body = {
        "credentials": {
            "name": username,
            "password": password,
            "site": {
                "contentUrl": siteName
            }
        }
    }

    const authResult = await fetch(baseUrl + "/api/3.20/auth/signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(body)
    }).then((res) => res.text());
    const authJson = convert.xml2js(authResult, {compact: true, spaces: 4});
    const credToken = authJson["tsResponse"]["credentials"]["_attributes"]["token"];

    const result = await fetch(baseUrl + "/api/3.20/sites/" + siteID + "/workbooks", {
        headers: {
            'X-Tableau-Auth': credToken,
        }
    }).then((res) => res.text());
    const json = convert.xml2json(result, {compact: true, spaces: 4});
    return json;
}

async function getEmployees(apiKey, subdomain) {
    const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: 'Basic NDdhZWM2YzZmMGM3ZGRiMDc4MmVlZTBlYTI1ODczOGI3YjdjZWQwYTp4'
        },
        body: JSON.stringify({fields: ['firstName', 'lastName', 'jobTitle', 'bestEmail']})
      };
    
    const result = await fetch("https://api.bamboohr.com/api/gateway.php/uwaterloo/v1/reports/custom?format=JSON", options)
    .catch((err) => console.log(err))
    .then((res) => res.json());
    return result;
}

async function getDeals(bearerToken) {
    const result = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + bearerToken,
        }
    }).then((res) => res.json());
    return result;
}