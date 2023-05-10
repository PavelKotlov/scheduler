<h1 align="center">Interview Scheduler</h1>

#### 🔗 Interview Scheduler
The interview Scheduler app assists students by tracking upcoming interviews. Utilizing React for the front end and a Postgres database for the back end, this SPA (single page application) enables users to book, edit, and cancel scheduled interviews in real-time. The client and server apps communicate over HTTP using Axios requests. Also, best practices of Test Driven Development were followed during the building of all the app's components. Testing frameworks used during this project were Jest, Storybooks, and Cypress to enable unit, integration, and End-2-End (E2E) testing.

🔗 [Scheduler API Repo](https://github.com/PavelKotlov/scheduler-api)

[![made-with-Node](https://img.shields.io/badge/Made%20with-Node.js%20-success)](https://nodejs.org/en/)
[![made-with-express](https://img.shields.io/badge/Made%20with-Express.js%20-black)](https://expressjs.com/)
[![made-with-jquery](https://img.shields.io/badge/Made%20with-jQuery%20-blue)](https://jquery.com/)
[![made-with-ajax](https://img.shields.io/badge/Made%20with-AJAX%20-blue)]()
[![made-with-body-parser](https://img.shields.io/badge/Made%20with-Body_Parser%20-red)](https://www.npmjs.com/package/body-parser)
[![made-with-chance](https://img.shields.io/badge/Made%20with-Chance%20-red)](https://www.npmjs.com/package/chance)
[![made-with-md5](https://img.shields.io/badge/Made%20with-MD5%20-black)](https://www.npmjs.com/package/md5)
[![made-with-nodemon](https://img.shields.io/badge/Made%20with-Nodemon.js%20-success)](https://nodemon.io/)
[![made-with-html](https://img.shields.io/badge/Made%20with-HTML%20-orange)](https://developer.mozilla.org/en-US/docs/Web/html)
[![made-with-css](https://img.shields.io/badge/Made%20with-CSS%20-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript%20-yellow)](https://developer.mozilla.org/en-US/docs/Web/javascript)

## Table of Content
- [🔗 Interview Scheduler](#-interview-scheduler)
- [Table of Content](#table-of-content)
- [🌟 Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [⚫ Endpoints](#-endpoints)
- [🧱 Main Structure](#-main-structure)
- [📦 Tech Stack (Dependencies)](#-tech-stack-dependencies)
  - [🔨 Dependencies](#-Dependencies)
  - [🧰 Development Dependencies](#-development-dependencies)
- [⚠️ Disclaimer](#️-disclaimer)

## 🌟 Features
- Create tweets under 140 characters.
- Hide and show new tweet input box.
- Return to top button when scrolling page.
 
## 🚀 Getting Started

### Setup App
1. Fork repository.
2. Clone Repository to local machine.
3. Install all dependencies using the `npm install` command.
4. Fork and clone the scheduler-api repository from [here](https://github.com/lighthouse-labs/scheduler-api)
5. In terminal run the `startpostgres` command to start the postgres server
6. Follow the README.md instructions from scheduler-api to setup and seed the scheduler_development database

***To run cypress you will also need to create the scheduler_test database *and install X-server(for WSL users only):
1. In a new terminal window `cd scheduler-api` then run `psql -U development -d scheduler_test`
2. Login using the same info from scheduler-api README.md
3. Next duplicate the .env.development file and rename it .env.test. In the new file, change only the PGDATABASE value to scheduler_test
4. Now run the test server using this command `NODE_ENV=test npm start` once ready open the browser and go to localhost:8001
5. Then seed the database by inserting the following url in the browser `http://localhost:8001/api/debug/reset`
6. Download and install X-server [VcXSrv](https://sourceforge.net/projects/vcxsrv/)
7. Download the configuration file [here](https://drive.google.com/file/d/1xfaeGpQcF9sPAIUTMtFdAhUUryNDQ1tl/view) and copy it to your desktop. You will be using this file to run VcXSrv.

### Run App
`cd scheduler`
- Running Webpack Development Server `npm start`
- Running Jest Test Framework `npm test`
- Running Storybook Visual Testbed `npm run storybook`
- Running Cypress Test Framework `npm run cypress`

`cd scheduler-api` 
- Running Scheduler Development Database `npm start`
- Running Scheduler Test Database `NODE_ENV=test npm start`

## ⚫ Endpoints
- Base URL : http://127.0.0.1:8080

| <b> Http method </b> | path                             | Description                                                                             |
| :------------------: | :------------------------------: | :-------------------------------------------------------------------------------------: |
| `GET`                | `/`                              | Gets index page and retrieves all the posts of a user                                   |
| `POST`               | `/`                              | Creates a new post and adds it to all displayed posts                                   |

## 🧱 Main Structure
```sh
├─── .github                # note to students
├─── public                 
│  ├─── images              # contains proflie pic
│  ├─── scripts             # contains client side scripts
│  ├─── styles              # contains all the css files
│  ├─── vendor              # contains css normalization and jquery scripts
│  ├─── index.html          # main page
├─── server             
│  ├─── data-files          # mock tweets
│  ├─── lib                 
│  |  ├─── util             # contains all the helper functions
│  ├─── routes              # app routes
│  ├─── index.js            # the main driver of the app includes all the routes and server configs
├─── .gitignore
├─── README.md
├─── package-lock.json
└─── package.json
```

## 📦 Tech Stack (Dependencies)

### 🔨 Dependencies
- [Express.js](https://www.npmjs.com/package/express)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [Chance](https://www.npmjs.com/package/chance)
- [MD5](https://www.npmjs.com/package/md5)

### 🧰 Development Dependencies
- [Nodemon](https://www.npmjs.com/package/nodemon)

## ⚠️ Disclaimer
- This is a project for [LHL web development bootcamp](https://www.lighthouselabs.ca/) and is not meant for production use.


## Screenshoots

![Add New Interview Form](https://user-images.githubusercontent.com/107829745/229013526-10121cf7-ce8d-4f08-8255-70b9a83b4e83.JPG)
![Hover Over Interview](https://user-images.githubusercontent.com/107829745/229013518-6a9df0a4-70d2-4acf-8648-d3ff267908b4.JPG)
![Confirmation Before Deletion](https://user-images.githubusercontent.com/107829745/229013516-e6a7a0cd-e7ae-4798-98cf-9fb7988df60f.JPG)
![Deleting Animation](https://user-images.githubusercontent.com/107829745/229013517-775f4b61-e6c1-4e48-929d-b16497ca9c13.JPG)
![Saving Animation](https://user-images.githubusercontent.com/107829745/229013519-ba5bd64c-8b5d-4c07-b990-0027f6b2d8d9.JPG)
![Add New Interview - No Interviewer Error](https://user-images.githubusercontent.com/107829745/229013523-6d63bed3-8c26-4a6c-a0b9-5018a4e0648b.JPG)
![Add New Interview - No Name Error](https://user-images.githubusercontent.com/107829745/229013525-d62bccf6-d470-40f6-b2d5-d229790893d5.JPG)


<!--## Dependencies
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
- sass V^1.53.0-->
