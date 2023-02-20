# Project-3: GalleryHub

Created By: **Briana Wright**, **Eric Elsner** and **Belal Elkurd**

- picture of final landing page will be here

## Overview

The GalleryHub app is an art sharing app for curators and artists to share their art/galleries with the world.
This app was made using the MERN stack. For more information on how we created this app, check out the rest of this repository!

This is the backend repository for the GalleryHub app. Click this link to view our front end client: (https://github.com/brianaleew/Project-3-FrontEnd)

- link to project will be added upon deployment

## User Stories

For this app, we are targeting two main kinds of users: "Curators" and "Viewers" - Curators are people who have galleries or collections of art and want to share them. - Viewers are the average art lover or anyone who is interested in art and wishes to view some.

All users should be able to:

- Be greeted by a landing page featuring an index of galleries
- Be able to sign up upon clicking "Sign Up"
- Choose whether they would like to make a "Curator" account or an "Explorer" Account
- Be able to log in upon clicking "Log In"
- View all galleries by clicking "Explore Exhibits"
- View an index of all artworks inside each gallery upon clicking the gallery
- View each individual artwork on its own show page

Curators should be able to:

- Create, View, Edit and Delete Galleries they own upon clicking "Manage Exhibits"
- View Artist profiles upon clicking "Artist Profiles"
- Add, View, Edit and Delete Artists Info from their Gallery
- Add, View, Edit and Delete Artworks from their Gallery

## ERDs

![ERD Picture ](/Images/finalERD.png)

## Routes Tables

### Galleries

| Verb   | URI Pattern      | Controller#Action  |
| ------ | ---------------- | ------------------ |
| GET    | `/galleries`     | `galleries#index`  |
| GET    | `/galleries/:id` | `galleries#show`   |
| POST   | `/galleries`     | `galleries#create` |
| PATCH  | `/galleries/:id` | `galleries#update` |
| DELETE | `/galleries/:id` | `galleries#delete` |

### Users

| Verb   | URI Pattern         | Controller#Action |
| ------ | ------------------- | ----------------- |
| POST   | `/sign-up`          | `users#signup`    |
| POST   | `/sign-in`          | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Artists

| Verb   | URI Pattern          | Controller#Action |
| ------ | -------------------- | ----------------- |
| GET    | `/artists`           | `artist#index`    |
| GET    | `/artists/:id`       | `artist#show`     |
| POST   | `/artists`           | `artist#create`   |
| PATCH  | `/artists/:artistId` | `artist#update`   |
| DELETE | `/artists/:artistId` | `artist#delete`   |

### Artworks

| Verb   | URI Pattern    | Controller#Action |
| ------ | -------------- | ----------------- |
| GET    | `/artwork`     | `artwork#index`   |
| GET    | `/artwork/:id` | `artwork#show`    |
| POST   | `/artwork`     | `artwork#create`  |
| PATCH  | `/artwork/:id` | `artwork#update`  |
| DELETE | `/artwork/:id` | `artwork#delete`  |

## General Approach

Our general approach for this project was to start simple and basic. We narrowed down what we wanted our main functions of the site to be through group discussion and user stories. Then, we translated our desires into pieces of code using ERDs.

We approached our design with the industry standard "mobile-first" method, as shown in our wireframes (located in our front-end repo). As far as the "look" of our website, we decided that a simple, clean design makes the most sense for an application centered around art.

## Unsolved Issues/Major Hurdles

- Artists being a subdoc of a subdoc (will add more detail later)

## Technologies Used

- JavaScript
- Express
- MongoDb
- Mongoose
- NodeJs

## Installation Instructions
