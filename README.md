# Interview Scheduler

The interview Scheduler app assists students by tracking upcoming interviews. Utilizing React for the front end and a Postgres database for the back end, this SPA (single page application) enables users to book, edit, and cancel scheduled interviews in real-time. The client and server apps communicate over HTTP using Axios requests. Also, best practices of Test Driven Development were followed during the building of all the app's components. Testing frameworks used during this project were Jest, Storybooks, and Cypress to enable unit, integration, and End-2-End (E2E) testing.

## Screenshoots

![Add New Interview Form](https://user-images.githubusercontent.com/107829745/229013526-10121cf7-ce8d-4f08-8255-70b9a83b4e83.JPG)
![Hover Over Interview](https://user-images.githubusercontent.com/107829745/229013518-6a9df0a4-70d2-4acf-8648-d3ff267908b4.JPG)
![Confirmation Before Deletion](https://user-images.githubusercontent.com/107829745/229013516-e6a7a0cd-e7ae-4798-98cf-9fb7988df60f.JPG)
![Deleting Animation](https://user-images.githubusercontent.com/107829745/229013517-775f4b61-e6c1-4e48-929d-b16497ca9c13.JPG)
![Saving Animation](https://user-images.githubusercontent.com/107829745/229013519-ba5bd64c-8b5d-4c07-b990-0027f6b2d8d9.JPG)
![Add New Interview - No Interviewer Error](https://user-images.githubusercontent.com/107829745/229013523-6d63bed3-8c26-4a6c-a0b9-5018a4e0648b.JPG)
![Add New Interview - No Name Error](https://user-images.githubusercontent.com/107829745/229013525-d62bccf6-d470-40f6-b2d5-d229790893d5.JPG)

## Setup App

1. Clone scheduler repository
2. Install dependencies with `npm install`
3. Clone the scheduler-api repository from [here](https://github.com/lighthouse-labs/scheduler-api)
4. In terminal run the `startpostgres` command to start the postgres server
5. Follow the README.md instructions from scheduler-api to setup and seed the scheduler_development database

***To run cypress you will also need to create the scheduler_test database *and install X-server(for WSL users only):
1. In a new terminal window `cd scheduler-api` then run `psql -U development -d scheduler_test`
2. Login using the same info from scheduler-api README.md
3. Next duplicate the .env.development file and rename it .env.test. In the new file, change only the PGDATABASE value to scheduler_test
4. Now run the test server using this command `NODE_ENV=test npm start` once ready open the browser and go to localhost:8001
5. Then seed the database by inserting the following url in the browser `http://localhost:8001/api/debug/reset`
6. Download and install X-server [VcXSrv](https://sourceforge.net/projects/vcxsrv/)
7. Download the configuration file [here](https://drive.google.com/file/d/1xfaeGpQcF9sPAIUTMtFdAhUUryNDQ1tl/view) and copy it to your desktop. You will be using this file to run VcXSrv.

## Running App

`cd scheduler` 
- Running Webpack Development Server `npm start`
- Running Jest Test Framework `npm test`
- Running Storybook Visual Testbed `npm run storybook`
- Running Cypress Test Framework `npm run cypress`

`cd scheduler-api` 
- Running Scheduler Development Database `npm start`
- Running Scheduler Test Database `NODE_ENV=test npm start`

## Dependencies
- axios V^0.20.0
- classnames V^2.2.6
- normalize.css V^8.0.1
- react V^16.9.0
- react-dom V^16.9.0
- react-scripts V3.4.4

## Dev - Dependencies
- @babel/core V^7.4.3
- @storybook/addon-actions V^5.0.10
- @storybook/addon-backgrounds V^5.0.10
- @storybook/addon-links V^5.0.10
- @storybook/addons V^5.0.10
- @storybook/react V^5.0.10
- @testing-library/jest-dom V^4.0.0
- @testing-library/react V^8.0.7
- @testing-library/react-hooks V^8.0.1
- babel-loader V8.1.0
- prop-types V^15.8.1
- react-test-renderer V^16.9.0
- sass V^1.53.0
