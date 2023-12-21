# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

Check it out here 

https://snackaholic.github.io/website/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy to github pages

switch branch
`git checkout -b gh-pages`

push changes
`git push origin gh-pages`

install utils
`npm install -g angular-cli-ghpages`

build the application
`ng build --base-href https://snackaholic.github.io/website/`

upload changes
`ngh --dir=dist/website`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
