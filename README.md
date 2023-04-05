# Paulo Azoia - Front End Project

# Wiki Docs

## Table of Contents

- [Client requirements](#client-requirements)
- [Technologies](#technologies)
- [How to run app](#how-to-run-app)
- [Project Status](#project-status)

## Client requirements

> **_Front End_**  
> Wiki Project

Now that we have the backend for our wiki, like Wikipedia, we would like a front end service that interacts with it.  
Please follow the requirements below:

> ### Deliverable:

**_Home page_**

- 🚀 Home page will hit endpoint: `GET /documents`  
  🚀 Each available title will be displayed in a box.

**_Document Modal_**

- 🚀 User has the option to click on a title, this will hit endpoint: `GET /documents/<title>/latest` and will return a Model with displaying the latest document revision.

- 🚀 In the latest document revision popup window, there will be an `Edit Document` option that will allow the user to submit a new document revision for the selected title.  
  This will hit endpoint: `POST /documents/<title>`
- 🚀 Open a new modal with editable text with the options to save or cancel.

- 🚀 Open model with message returned from save button

**_Home page form_**

- Home page has a form that has the options to:

  - Add a new title:

    - Will open popup window with inputs:
      - `new title` (can't be empty)
      - `content` (can't be empty)

    This will hit endpoint: `POST /documents/<title>`

  - Search for available document revisions for an existing title:
    - Will open popup window with inputs:
      - `title` (can't be empty, dynamically searches titles in db)
      - `timestamp` (optional, time format must be `Y:M:D H:M:S.MS`)
    - If `timestamp` is submitted empty, hit endpoint: `GET /documents/<title>`
      - This will return all available revisions in a popup window with a table displaying the results.
    - If `timestamp` is correctly populated, hit endpoint: `GET /documents/<title>/<timestamp>`
      - This will return a popup window with a table displaying the document revision, if one exists for the timestamp.

---

## Technologies

- React
- Javascript

---

## How to run app

### **Dependencies**

> In the root folder install react app dependencies with the command below:

```
$ yarn install
```

### **Starting React app**

> Start the React app with the command below:

```
$ yarn start
```

> Make sure that both the flask server for the Moody's wiki docs backend and React app are running  
> Visit http://localhost:3000 et Voila, the app is running.

---

## Project Status

> To Do's

**_Home page_**

- ✅ Create a Documents component that will display all the titles coming in to the home page.
- ✅ Each title will be displayed in a box.

**_Document Modal_**

- ✅ User has the option to click on a title, this will hit endpoint: `GET /documents/<title>/latest` and will return a Model displaying the latest document revision.
- ✅ In the latest document revision popup window, there will be an `Edit Document` option that will allow the user to submit a new document revision for the selected title.  
  This will hit endpoint: `POST /documents/<title>`
- ✅ Open a new modal with editable text with the options to save or cancel.
- ✅ Open model with message returned from save button

> Done
