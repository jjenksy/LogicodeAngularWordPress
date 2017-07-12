# LogicodeAngularWordPress

This project is an [Angular CLI](https://github.com/angular/angular-cli) application and is a StaticFile application backed by wordpress.com's public API.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deployment this assume Cloud Foundry Familiarity
The chosen deployment of the application was for me through CloudFoundry once the `ng-build' command is ran a you `dist/' directory is created
create a file called `Staticfile` in that directory.
Login to your Cloud Foundry 

```
cf login
```
Navigate to the dist folder and run the command
```
cf push <app-name> -m 64M
```

Replace the `<app-name>` with the name of your application.
Cloud Foundry will then build the app. using the static build pack and deploy it to an NGINX server.
## Authors

* **John Jenkins** - (https://github.com/jjenksy)


