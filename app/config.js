export const config = {
    Quickbooks: {
      name: 'Quickbooks',
      fields: [
        {
          name: 'Realm ID',
          label: 'realmID',
          type: 'text'
        },
        {
          name: 'Access Token',
          label: 'accessToken',
          type: 'password'
        }
      ],
      info: "To get your Realm ID and Access Token, follow <a href='https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0#step-1-get-the-access-token' target='_blank'>this guide</a>"
    },
    Tableau: {
      name: 'Tableau',
      fields: [
        {
          name: 'Username',
          label: 'username',
          type: 'text'
        },
        {
          name: 'Password',
          label: 'password',
          type: 'password'
        },
        {
          name: 'Site Name',
          label: 'siteName',
          type: 'text'
        },
        {
          name: 'Base URL',
          label: 'baseUrl',
          type: 'text'
        },
        {
          name: 'Site ID',
          label: 'siteID',
          type: 'text'
        }
      ],
      info: "The Base URL can be accessed by copying the URL from your Tableau dashboard. \n The Site Name can be accessed in the URL of your Tableau dashboard after the 'site/' portion, and the Site ID can be found using this guide: <a href='https://help.tableau.com/current/online/en-us/sites_add.htm' target='_blank'>here</a>."
    },
    Bamboo: {
      name: 'Bamboo',
      fields: [
        {
          name: 'Subdomain',
          label: 'subdomain',
          type: 'text'
        },
        {
          name: 'API Key',
          label: 'apiKey',
          type: 'password'
        },
      ],
      info: "To get your API Key, click on the Bamboo HR logo on the top right of your Bamboo HR dashboard, and click on 'API Keys'."
    },
    Hubspot: {
      name: 'Hubspot',
      fields: [
        {
          name: 'Private App Token',
          label: 'bearerToken',
          type: 'text'
        },
      ],
    info: "To get a new Private App Token, follow <a href='https://developers.hubspot.com/docs/api/private-apps' target='_blank'>this guide</a>"
    }
}
