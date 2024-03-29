<h1 align="center">Interview Scheduler</h1>

#### 🔗 Interview Scheduler
The interview Scheduler app assists students by tracking upcoming interviews. Utilizing React for the front end and a Postgres database for the back end, this SPA (single page application) enables users to book, edit, and cancel scheduled interviews in real-time. The client and server apps communicate over HTTP using Axios requests. Also, best practices of Test Driven Development were followed during the building of all the app's components. Testing frameworks used during this project were Jest, Storybooks, and Cypress to enable unit, integration, and End-2-End (E2E) testing.

🔗 [Scheduler API Repo](https://github.com/PavelKotlov/scheduler-api)

[![made-with-Node](https://img.shields.io/badge/Made%20with-Node.js%20-success)](https://nodejs.org/en/)
[![made-with-React](https://img.shields.io/badge/Made%20with-React%20-blue)](https://react.dev/)
[![made-with-Sass](https://img.shields.io/badge/Made%20with-Sass%20-pink)](https://sass-lang.com/)
[![made-with-Storybook](https://img.shields.io/badge/Made%20with-Storybook%20-pink)](https://storybook.js.org/)
[![made-with-Jest](https://img.shields.io/badge/Made%20with-Jest%20-purple)](https://jestjs.io/)
[![made-with-Axios](https://img.shields.io/badge/Made%20with-Axios%20-blue)](https://axios-http.com/docs/intro)
[![made-with-Classnames](https://img.shields.io/badge/Made%20with-Classnames%20-success)](https://www.npmjs.com/package/classnames)
[![made-with-Normalize.css](https://img.shields.io/badge/Made%20with-Normalize.css%20-orange)](https://www.npmjs.com/package/normalize.css)


## Table of Content
- [🔗 Interview Scheduler](#-interview-scheduler)
- [Table of Content](#table-of-content)
- [🌟 Features](#-features)
- [🚀 Getting Started](#-getting-started)
  - [Setup](#setup-app)
  - [Run App](#run-app)
- [🧱 Main Structure](#-main-structure)
- [📦 Tech Stack (Dependencies)](#-tech-stack-dependencies)
  - [🔨 Dependencies](#-Dependencies)
  - [🧰 Development Dependencies](#-development-dependencies)
- [⚠️ Disclaimer](#️-disclaimer)

## 🌟 Features
- A student can select a day and view the number of interview spots available for that day.
- A student can add, edit, and delete interviews.
- A student can select or change an interviewer.

<div align="center">
  <img alt="schedule interview" src="https://github.com/PavelKotlov/scheduler/assets/107829745/bd77fe48-d020-454e-b1a2-ab1ae0427f2b" width="512:288"/>
</div>

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
`cd scheduler-api` 
- Running Scheduler Development Database `npm start`
- Running Scheduler Test Database `NODE_ENV=test npm start`

`cd scheduler`
- Running Webpack Development Server `npm start`
- Running Jest Test Framework `npm test`
- Running Storybook Visual Testbed `npm run storybook`
- Running Cypress Test Framework `npm run cypress`

## 🧱 Main Structure
```sh
├─── .storybook                
├─── cypress                  # cypress end to end testing
│  ├─── fixtures             
│  ├─── integration
│  ├─── plugins
│  ├─── support
├─── public                   # contains static files such as images
│  ├─── images
├─── src
│  ├─── _mocks_               # mock data
│  ├─── components            # react components
│  ├─── helpers               # all helper functions to manage interviews
│  ├─── hooks                 # custom react hooks
│  ├─── styles                # sass style sheets
├─── stories                  # contains all the tests for storybook
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
