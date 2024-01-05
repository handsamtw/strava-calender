## Strava Calendar

Strava is a fitness app where users track their workouts, analyze performance, and connect with a community of athletes. It records activities like running and cycling using GPS, offering stats, challenges, and a social platform for sharing achievements.

This app allow Strava users to create their Strava calendar and share the image results on the social media

Running on Vercel serverless function, store data in MongoDB (store only access_token, refresh_token, token_expired_timestamp)

Table of Contents
Connect And Grant Permission
Example
Running for development locally
Setting up Vercel
Running locally
How to Contribute
Features in Progress
Credit

## Connect And Grant Permission

Visit
[Strava Calendar Chart Generator](strava-calender.vercel.app) and click Connect with Strava button below to grant permission

## Example

### Default theme

![theme-reds](/src/assets/preview-image/theme-Reds.png)

### Forest theme

![theme-greens](/src/assets/preview-image/theme-Greens.png)

### Aurora theme

![theme-PuBu](/src/assets/preview-image/theme-PuBu.png)

There're total 7 themes to select

## Running for development locally

To develop locally, you need:

- A fork of this project as your repository
- A Vercel project connected with the forked repository

- A complete setup of [backend microservice repository](https://github.com/handsamtw/strava-calender-api)

### Setting up Vercel

- [Create a new Vercel project by importing](https://vercel.com/import) the forked project on GitHub

### Setting up MongoDB

## Running locally

To run the [Angular](https://angular.io/) app locally, you can simply do

- clone the repo, and cd to the director
- `npm install` will install all required dependency in package.json
- `ng serve`
- Now try to access http://localhost:4200

## Angular CLI Code scaffolding

### Build the projects

`ng build` will build the project and stored the artifacts in the `dist/` directory

### Running unit tests

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
