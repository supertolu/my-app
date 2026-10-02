# Data Management Dashboard

A small Angular application for creating and viewing data entries through a simple dashboard interface. The app includes a form for posting new records and a list that fetches recent entries from a mock API.

## Overview

This project demonstrates:

- Angular 22 standalone components
- Reactive form handling with `ngModel`
- HTTP requests using Angular's `HttpClient`
- Async loading and display of records from JSONPlaceholder
- A lightweight dashboard-style UI for data entry tasks

## Features

- Create new data entries with a title and body
- Submit the form to a public mock API endpoint
- Display a list of fetched records from the API
- Show loading and submission states in the UI
- Clean, responsive dashboard layout

## Tech Stack

- Angular
- TypeScript
- RxJS
- HTML / SCSS
- JSONPlaceholder API for sample data requests

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (recommended LTS version)
- npm

## Installation

```bash
npm install
```

## Run the app locally

```bash
npm start
```

Then open:

```text
http://localhost:4200/
```

The development server supports live reload while you edit project files.

## Build for production

```bash
npm run build
```

Production output is generated in the `dist/` folder.

## Run tests

```bash
npm test
```

## Project structure

```text
src/
  app/
    app.html
    app.ts
    data-form/
    data-list/
    ...
```

## Notes

This app uses `https://jsonplaceholder.typicode.com` as a mock backend for demo purposes. The API accepts posts and returns sample data, but it is not a production database.

## Useful links

- [Angular](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
