## Moonpig Tech Test - Nigel Jones

Hi, here's my code for the Moonpig tech test.

The production build of this project is hosted on CloudFront->S3 at https://d19wa4v5oczpm6.cloudfront.net/index.html

The site was created via `create-react-app`. I used `yarn` as the package manager and task runner.

Routing is handled by `react-router`/`react-router-dom` and state management by `redux` and `redux-saga`.
My approach to componentisation was to separate the standard React components from their Redux wrappers so they could be independently tested. 

If components require API calls to be made they dispatch actions from their `componentDidMount` lifecycle event which affect state in the reducer and are picked up by the saga middleware to call the actual API endpoints. This is perhaps over-complicated for this example but allows for expansion.

The Redux state tracks whether loads are in progress or if errors have occurred so that the UI can be updated accordingly. Unfortunately I ran out of time to make these states visually appealing or implement retry logic in the case of errors.

Unit testing is via `jest` and `enzyme`. Coverage is 100% apart from the create-react-app boilerplate files.

I tested for accessibility issues using the aXe plugin, see https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd.

I used `eslint` for static code analysis, using a modified version of the AirBnB and Jest presets.

The site should be fairly responsive across a range of screen sizes. Flexbox was used for this - I tend to avoid media queries unless absolutely necessary. I also added `reset.css` to assist with consistent styling across browsers.

Manual testing results - Chrome (ok), Firefox (unusual buy button placement, otherwise ok), Safari (ok)

### Next Steps

Going further I would have liked to:

* Add automated cross-browser/E2E testing using Selenium or Cypress
* Add more details to the product results list and product details page
* Implement further functionality, for example a shopping basket and checkout
* Implement a nice error component with retry functionality
* Implement a 404 page
* Optimise bundle size
* Make a CI/CD pipeline
* Possibly enable offline usage for certain scenarios (using a service worker), depending on user need


Thanks for your time.


Nigel

--

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn coverage`

Custom task to run all tests and generate a coverage report in the console and as an HTML page.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
