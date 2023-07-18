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
      ]
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
      ]
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
      ]
    },
    Hubspot: {
      name: 'Hubspot',
      fields: [
        {
          name: 'Bearer Token',
          label: 'bearerToken',
          type: 'text'
        },
      ]
    }
}
