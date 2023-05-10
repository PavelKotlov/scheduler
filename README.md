<h1 align="center">Interview Scheduler</h1>

#### 🔗 Interview Scheduler
The interview Scheduler app assists students by tracking upcoming interviews. Utilizing React for the front end and a Postgres database for the back end, this SPA (single page application) enables users to book, edit, and cancel scheduled interviews in real-time. The client and server apps communicate over HTTP using Axios requests. Also, best practices of Test Driven Development were followed during the building of all the app's components. Testing frameworks used during this project were Jest, Storybooks, and Cypress to enable unit, integration, and End-2-End (E2E) testing.

🔗 [Scheduler API Repo](https://github.com/PavelKotlov/scheduler-api)

[![made-with-Node](https://img.shields.io/badge/Made%20with-Node.js%20-success)](https://nodejs.org/en/)
[![made-with-React](https://img.shields.io/badge/Made%20with-React%20-blue)]()
[![made-with-Sass](https://img.shields.io/badge/Made%20with-Sass%20-pink)]()
[![made-with-Storybook](https://img.shields.io/badge/Made%20with-Storybook%20-pink)]()
[![made-with-Jest](https://img.shields.io/badge/Made%20with-Jest%20-purple)]()
[![made-with-Axios](https://img.shields.io/badge/Made%20with-Axios%20-blue)]()
[![made-with-Classnames](https://img.shields.io/badge/Made%20with-Classnames%20-success)]()
[![made-with-Normalize.css](https://img.shields.io/badge/Made%20with-Normalize.css%20-success)]()



<!--https://axios-http.com/docs/intro -->

## Table of Content
- [🔗 Interview Scheduler](#-interview-scheduler)
- [Table of Content](#table-of-content)
- [🌟 Features](#-features)
- [🚀 Getting Started](#-getting-started)
  - [Setup](#setup-app)
  - [Run App](#run-app)
- [⚫ Endpoints](#-endpoints)
- [🧱 Main Structure](#-main-structure)
- [📦 Tech Stack (Dependencies)](#-tech-stack-dependencies)
  - [🔨 Dependencies](#-Dependencies)
  - [🧰 Development Dependencies](#-development-dependencies)
- [⚠️ Disclaimer](#️-disclaimer)

## 🌟 Features
<!-- add features -->
 
## 🚀 Getting Started

### Setup App
1. Fork repository.
2. Clone Repository to local machine.
3. Install all dependencies using the `npm install` command.
4. Fork and clone the scheduler-api repository from [here](https://github.com/lighthouse-labs/scheduler-api).
5. In terminal run the `startpostgres` command to start the PostgreSQL server.
6. Follow the README.md instructions from scheduler-api to setup and seed the scheduler_development database.

***To run cypress you will also need to create the scheduler_test database *and install X-server(for WSL users only):
1. In a new terminal window `cd scheduler-api` then run `psql -U development -d scheduler_test`.
2. Login using the same info from scheduler-api README.md.
3. Next duplicate the .env.development file and rename it .env.test. In the new file, change only the PGDATABASE value to scheduler_test.
4. Now run the test server using this command `NODE_ENV=test npm start` once ready open the browser and go to [localhost:8001](http://localhost:8001).
5. Then seed the database by inserting the following url in the browser `http://localhost:8001/api/debug/reset` or clicking [here](http://localhost:8001/api/debug/reset).
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
- Base URL : http://127.0.0.1:8001
<!-- - Api URL : http://127.0.0.1:3000 -->

| <b> Http method </b> | path                             | Description                                                                             |
| :------------------: | :------------------------------: | :-------------------------------------------------------------------------------------: |
| `GET`                | `/`                              | Gets index page and retrieves all the posts of a user                                   |
| `POST`               | `/`                              | Creates a new post and adds it to all displayed posts                                   |

## 🧱 Main Structure
```sh
├─── .storybook                
├─── cypress
│  ├─── fixtures
│  ├─── integration
│  ├─── plugins
│  ├─── support
├─── public
│  ├─── images
│  ├─── index.html
├─── src
│  ├─── _mocks_
│  ├─── components
│  ├─── helpers
│  ├─── hooks
│  ├─── styles
│  ├─── index.js
│  ├─── index.css
│  ├─── setupTests.js
├─── stories
├─── .env.development
├─── .eslintrc.json
├─── .gitignore
├─── README.md
├─── cypress.json
├─── jsconfig.json
├─── package-lock.json
└─── package.json
```

## 📦 Tech Stack (Dependencies)

### 🔨 Dependencies
- [Axios](https://www.npmjs.com/package/axios/v/0.20.0)
- [Classnames](https://www.npmjs.com/package/classnames/v/2.2.6)
- [Normalize.css](https://www.npmjs.com/package/normalize.css/v/8.0.1)
- [React](https://react.dev/learn/start-a-new-react-project) **(V^16.9.0)
- [React-Dom](https://www.npmjs.com/package/react-dom/v/16.9.0)
- [React-Scripts](https://www.npmjs.com/package/react-scripts/v/3.4.4)

### 🧰 Development Dependencies
- [@babel/core](https://www.npmjs.com/package/@babel/core/v/7.4.3)
- [@storybook/addon-actions](https://www.npmjs.com/package/@storybook/addon-actions/v/5.0.10)
- [@storybook/addon-backgrounds](https://www.npmjs.com/package/@storybook/addon-backgrounds/v/5.0.10)
- [@storybook/addon-links](https://www.npmjs.com/package/@storybook/addon-links/v/5.0.10)
- [@storybook/addons](https://www.npmjs.com/package/@storybook/addons/v/5.0.10)
- [@storybook/react](https://www.npmjs.com/package/@storybook/react/v/5.0.10)
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom/v/4.0.0)
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react/v/8.0.7)
- [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks/v/8.0.1)
- [Babel-Loader](https://www.npmjs.com/package/babel-loader/v/8.1.0)
- [Prop-Types](https://www.npmjs.com/package/prop-types/v/15.8.1)
- [React-Test-Renderer](https://www.npmjs.com/package/react-test-renderer/v/16.9.0)
- [Sass](https://www.npmjs.com/package/sass/v/1.53.0)

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
