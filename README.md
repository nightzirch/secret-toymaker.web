# Secret Toymaker

#### Frontend - [secret-toymaker.web](https://github.com/nightzirch/secret-toymaker.web)

#### Backend - [secret-toymaker.backend](https://github.com/nightzirch/secret-toymaker.backend)

#### Design - [Link to Adobe XD](https://xd.adobe.com/view/30125ffd-4f87-407c-7a51-d35b73e933b5-4623/grid)

---

## Development

### Requirements

- `node@10.14.2` or newer

### Getting started

- Clone the project
- `npm i`
- Create an `.env` file set up with environment variables

  ```
  SASS_PATH=src/

  REACT_APP_USE_LOCAL_FUNCTIONS=false

  REACT_APP_API_KEY=PLACE_YOUR_OWN_KEYS_HERE
  REACT_APP_AUTH_DOMAIN=PLACE_YOUR_OWN_KEYS_HERE
  REACT_APP_DATABASE_URL=PLACE_YOUR_OWN_KEYS_HERE
  REACT_APP_PROJECT_ID=PLACE_YOUR_OWN_KEYS_HERE
  REACT_APP_STORAGE_BUCKET=PLACE_YOUR_OWN_KEYS_HERE
  REACT_APP_MESSAGING_SENDER_ID=PLACE_YOUR_OWN_KEYS_HERE
  ```

- To get the environment variables, there are two options:
  1. Create your own project.
     - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project. Name it `secret-toymaker-dev`.
     - In the terminal, run `firebase init` and log in using your associated Google account.
     - Select `secret-toymaker-dev` as the project of choice when initializing.
     - You only need `hosting`.
     - In the [Firebase Console](https://console.firebase.google.com/), go to Project Settings, grab your config keys, and place them inside your `.env` file for the corresponding variable names.
  2. _(For verified contributers)_ Ask [Chris](https://github.com/nightzirch) for the keys.

### Running development

- `npm start`
- The default browser will automatically open [localhost:3000](http://localhost:3000).

### Developing

#### Firebase Functions

- If you want to point the Firebase Functions in the frontend to the [backend project](https://github.com/nightzirch/secret-toymaker.backend), set `REACT_APP_USE_LOCAL_FUNCTIONS` to true. Remember to run the backend project as well :)

#### Github

- The develop branch is automatically building to the dev environment: https://secret-toymaker-dev.web.app/
- The master branch is automatically building to the production environment: https://secrettoymaker.com
- Therefore, all Pull Requests must be accepted by Chris. Who doesn't like a dictatorship anyway?
