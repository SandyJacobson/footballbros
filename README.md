# FootballBros

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**FootballBros** is a full stack site that allows fantasy football fanatics to track their teams and leagues. You'll be able to add/delete/update players as well as teams._

https://footballbros.netlify.app/
https://footballbros-api.herokuapp.com/



<br>

## MVP

_The **FootballBros** MVP is to have a full full stack app that has both back and front end CRUD, as well as a privarte user experience with user authorization._

<br>

### Goals

- _BackEnd CRUD_
- _User Authorization_
- _FrontEnd CRUD_
- _Styling with flexbox_
- _etc._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The frontend framework_ |
|      Axios       | _Allows frontend to make API calls_ |
|   React Router   | _a tool that allows you to handle routes in a web app_ |
| Rails | _Backend framework_ |


<br>

### Client (Front End)

#### Wireframes

https://lucid.app/invitations/accept/103c533f-a122-4e5d-b327-bef23864ffa0

Mobile - https://whimsical.com/JdpxekAEhZA6bMsibbKWji

#### Component Tree

 https://whimsical.com/FAxHAvXTdA4RTRz4e2rWrA

#### Component Hierarchy
```
src
|__ App/
|__ components/
      |__ Layout.jsx
      |__ Header.jsx
      |__ Footer.jsx
      |__ MainContainer.jsx
      |__ Players.jsx
      |__ PlayersDetails.jsx
      |__ Teams.jsx
      |__ TeamsDetails.jsx
|__ services/
      |__ apiCofig.js
      |__ auth.js
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Homepage.jsx
      |__ Players.jsx
      |__ Teams.jsx
      |__ Team.jsx
```

#### Component Breakdown

|  Component   |    Type    | state | props | description  | 
| :----------: | :--------: | :---: | :---: | :-----------:|
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|   MainContainer    |   functional    |   y   |   y   | _Will container the original API call to get all players._      |
| Players | functional |   y   |   y   | _Contain API call to get indiviual players as well as create new ones._                 |
|    PlayersDetails    | functional |   y   |   y  | _Will contain function to edit and delete players._ |
|    Teams   | functional |   y   |   y  | _Contain API call to get indiviual teams as well as create new ones._ |
|    TeamsDetails    | functional |   y   |   y  | _Will contain function to edit and delete teams._ |
|    Layout    | functional |   n   |   n  | _Contains header and footer._ |
|    Login | functional |   n   |   n  | _Where players can log in._ |
|    Register    | functional |   n   |   n  | _Where players can register._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set up back end    |    H     |     5 hrs      |     0 hrs     |
| User Auth |    H     |     3 hrs      |     0 hrs     |
| User Auth |    H     |     3 hrs      |     0 hrs     |
| Layout |    H     |     3 hrs      |     0 hrs     | 
| Players CRUD |    H     |     3 hrs      |     0 hrs     | 
| Players CRUD |    H     |     3 hrs      |     0 hrs     | 
| Players CRUD |    H     |     3 hrs      |     0 hrs     | 
| LEAGUE CRUD |    H     |     3 hrs      |     0 hrs     | 
| LEAGUE CRUD |    H     |     3 hrs      |     0 hrs     | 
| LEAGUE CRUD |    H     |     3 hrs      |     0 hrs     |
| Styling |    H     |     3 hrs      |     0 hrs     | 
| Styling |    H     |     3 hrs      |     0 hrs     | 
| Styling |    H     |     3 hrs      |     0 hrs     | 
| Advanced Styling |    L     |     3 hrs      |     0 hrs     | 
| Advanced Styling |    L    |     3 hrs      |     0 hrs     | 
| PostMVP |    L    |     6 hrs      |     0 hrs     |      
TBD     |
| TOTAL               |          |     53 hrs      |     0 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/13LZYsO1W3xUmDAGbkzmumhg4f0dEUnJF/view

<br>

***

## Post-MVP

- Add player points to tracking
- Player Comparison feature
- Manager comparison feature

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.