# OndeliveryRoomManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend Setup

Run `npm i` to install package
configure postgres user and password in config/config.json in server directory
run `npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all` to create and seed the database
run `npx nodemon` to run the server

## Backend server

Go to server directory. run `npx nodemon` for a dev server. Navigate to `http://localhost:3000`.

## Swagger Link

Navigate to `http://localhost:3000/api-docs`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
