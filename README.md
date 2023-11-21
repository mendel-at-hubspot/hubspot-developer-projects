# hubspot-developer-projects

## Base structure

The end result of each project with the base structure should be the following:

  - One private app named `My private app` which opens up the scope group `crm.objects.contacts.read`
  - One CRM Extension card which can be located in the middle pane for contacts, and is associated with the private app
  - One serverless app function which can be invoked from the extension card using the name `myFunc` associated with the private app
  - One CMS javascript module called `TodoList` which can be embedded in a website page
  - One CMS javascript partial called `Home` which can be embedded in HubL for a theme

## Extended structure

The end results of each project with the extended structure should be the following:

  - One private app named `My contacts app` which opens up the scope groups `crm.objects.contacts.read` and `crm.objects.contacts.write`
  - One private app named `My companies app` which opens up the scope groups `crm.objects.companies.read` and `crm.objects.companies.write`
  - One private app named `My deals app` which opens up the scope groups `crm.objects.deals.read` and `crm.objects.deals.write`
  - Two CRM Extension cards, each which can be located in the middle pane for contacts, and both associated with the contacts private app
  - Two CRM Extension cards, each which can be located in the middle pane for companies, and both associated with the companies private app
  - Two CRM Extension cards, each which can be located in the middle pane for deals, and both associated with the deals private app
  - Six total serverless app functions, one for each CRM extension card and invokable with the name `myFunc_<contacts|companies|deals>_<read|write>`
  - One CMS javascript module called `TodoList` which can be embedded in a website page
  - One CMS javascript partial called `Home` which can be embedded in HubL for a theme

