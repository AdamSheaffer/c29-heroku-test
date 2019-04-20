# c29-heroku-test

## Simple react/json-server app that can be (easily?) deployed to heroku.

### Things to note:
1. **package.json**
    * `start` script runs production build and starts json-server. Static dist files will be served by json-server.
    * `start:dev` script concurrently runs "normal" create-react-app dev build and json-server on separate ports. 
    * `json-server` dependency
1. **middleware.js**
    * This is only used on production. Checks if request is for an API route. If it's not, serve the static `index.html`
1. **data.js**
    * Database interaction module
    * Uses the following code to determine if the app is in `production` mode and sets the db url accordingly. In DEV mode the json-serve will be running on a separate port than the react dev server. In PROD mode, the json-server will also be serving the static files
    ```js
    const baseUrl = process.env.NODE_ENV === 'production'
        ? "/api/"
        : "http://localhost:5002/api/";
    ```
