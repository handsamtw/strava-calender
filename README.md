# Strava Calendar

<p style="color: #fc4c02"><em>All your Strava workout in one image</em></p>

## Why do I build this project?

I'm a passionate road runner, an avid Strava user, and a software engineer. One day, I stumbled upon the [GitHub Contributions Chart Generator](https://github.com/sallar/github-contributions-chart) which crafts beautiful images displaying GitHub contributions. Simultaneously, I discovered [spotify-github-profile](https://github.com/kittinan/spotify-github-profile), a tool that generates Spotify 'now playing' cards on GitHub profiles.

This sparked an idea to blend these concepts and develop an application that summarizes my Strava activities, generating a heatmap image for display on my GitHub profile.

Initially, I tend to mirror the workflow of spotify-github-profile, by prompting users to authorize the app the read access of their Strava data and return an image endpoint that users can add `<img src="image endpoint">` to their README.md.

However, considering a wider audience who may prefer copying or downloading the image, creating a user-friendly interface similar to the GitHub Contributions Chart seems beneficial. Thus, the tone of this project is set.

## What problem does it solve?

While Strava offers members the ability to track their monthly and annually progress, this access is restricted to premium members who must pay $80/year. Moreover, the display format and color scheme are confined to the image below.

[<img width=300 height=60 src="./src/assets/readme/Strava-calendar-view.png">](https://support.strava.com/hc/en-us/articles/216917697-Your-Strava-Profile-Page#calender)

The application offers diverse heatmap views of Strava activity and presents an opportunity for free users to share their results on social media without the constraints of being paid users.

### Example

**Default scheme**

<img height=300 width=480 alt="scheme-Reds" src="./src/assets/example/scheme-Reds.png">

**Forest scheme**

<img  height=300 width=480 alt="scheme-Greens" src="./src/assets/example/scheme-Greens.png">

**Aurora scheme**
<img  height=300 width=480 alt="scheme-Pubu" src="./src/assets/example/scheme-PuBu.png">

There are a total of seven color scheme available for selection.

## Tech Stack

### Hosting

- **Vercel**

### Database

- **MongoDB Atlas**

  - The database adheres to a strict policy of not storing any user-identifiable data. It exclusively retains short-lived access tokens, refresh tokens, token expiration timestamps, and temporary image files, all subject to permission granting.

### Backend API

- **[strava-calendar-api](https://github.com/handsamtw/strava-calender-api)**
  - Built with Python Flask framework hosted on Vercel

### Third-Party dependencies

- **[Strava API V3](https://developers.strava.com/docs/reference/)**
  - The logic is housed within the strava-calendar-api. There's no direct communication between the frontend and the Strava API

### CI/CD

- Currently in the planning phase with an intent to utilize Circle CI or Github Action.

## Table of Contents

| Section                         | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| Connect And Grant Permission    | Process for establishing connections and obtaining permissions |
| Running for development locally | Steps to run the project locally for development               |
| Setting up Vercel               | Guidelines for configuring Vercel hosting                      |
| Running locally                 | Instructions to run the project locally                        |
| How to Contribute               | Information on contributing to the project                     |
| Features in Progress            | Ongoing features and their development status                  |
| Credit                          | Acknowledgment and attribution                                 |

## Connect And Grant Permission

Visit
[Strava Calendar Chart Generator](strava-calender.vercel.app) and click `Connect with Strava` button to grant permission

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

### What I have learned?
