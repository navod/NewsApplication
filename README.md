# Zee News Mobile Application

![Logo](assets/logo.png)

The main purpose of this app is to give people the opportunity to view the latest news in worldwide.

- All News - Users can view all types of news
- Business News
- Science News
- sports News
- Technology news
<br/>

## Tech Stack

**Client:** React-Native, Redux

**Server:** Firebase
<br/>

## Installation

1. Get a free API Key at https://newsapi.org
2. Clone the repo
```bash
  git clone https://github.com/navod/NewsApplication.git
```
3. Install NPM packages
```bash
  npm install
```

4. Enter your API in `.env`
```bash
NEWS_API_KEY = 'ENTER YOUR API KEY';
```
<br/>

## Dependency Reference

**1. Redux** [Documentation](https://redux.js.org/introduction/getting-started)

I used this dependency to manage the states of the app. The following sub-dependencies were also used,
###### 1. react-redux
React Redux is the official UI binding for react Application.
###### 2. redux-thunk
Redux Thunk is middleware. I used it for allowing returning functions. This allows for delayed actions, including working with promises.2. redux-thunk - Redux Thunk is middleware. I used it for allowing returning functions. This allows for delayed actions, including working with promises.

##### Redux Architecture
![diagram]()

**2. Async-Storage** [Documentation](https://react-native-async-storage.github.io/async-storage/docs/usage/)

I used async storage dependency to store user data in local storage.

If the user clicks the "Remember me" button, the user data in the local storage will be saved. After clicking on it, the user does not need to log in again. Navigates automatically to the home screen.

**3. React-Navigation** [Documentation](https://reactnavigation.org/)

I used this dependency to implement navigation functionality. The following sub-dependencies were also used,

1.  react-navigation/material-top-tabs - To implement the tab section.
2.  react-navigation/drawer - To implement drawer.
3.  react-navigation/stack - To navgate to screen.

**4. Axios** [Documentation](https://www.npmjs.com/package/axios)

I used this dependency to manage HTTP requests.

**5. Moment** [Documentation](https://momentjs.com/)

I use this dependency to format date and time user friendly

**6. Net-info** [Documentation](https://github.com/react-native-netinfo/react-native-netinfo)

I used this dependency to check if the user has an active network connection.

**7. Firebase** [Documentation](https://rnfirebase.io/)

I used this dependency to perform the authentication part. The following dependencies were used,

```bash
npm i @react-native-firebase/app
```

```bash
@react-native-firebase/auth
```
**8. React-native-vector-icons** [Documentation](https://www.npmjs.com/package/react-native-vector-icons)

I used this dependency for use different icons.

**9. React-native-root-toast** [Documentation](https://www.npmjs.com/package/react-native-root-toast)

This toast supports both Android and iOS. I used this for calling API and using Component inside render.


**10. Dot-env** [Documentation](https://www.npmjs.com/package/react-native-dotenv)

I used this dependency to load environment variables using import statements.

**11. React-native-fast-image** [Documentation](https://www.npmjs.com/package/react-native-fast-image)

When I was using the reaction native image component I had to face with the following issues.

1. Low performance
2. Flickering.

I have solved the above problems, used by this dependency,

<br/>

## Color Reference

| Color     | Hex                                                              |
| --------- | ---------------------------------------------------------------- |
| Dark Blue | ![#1E4079](https://via.placeholder.com/10/1E4079?text=+) #1E4079 |
| Red       | ![#E93D25](https://via.placeholder.com/10/E93D25?text=+) #E93D25 |
| RED_1 | ![#26262D](https://via.placeholder.com/10/C9341F?text=+) #C9341F |
| RED_2 | ![#26262D](https://via.placeholder.com/10/ee6c4d?text=+) #ee6c4d |
| RED_3 | ![#ED614E](https://via.placeholder.com/10/ED614E?text=+) #ED614E |
| Green     | ![#5cb85c](https://via.placeholder.com/10/5cb85c?text=+) #5cb85c |
| Light_Gray_1 | ![#FCFCFC](https://via.placeholder.com/10/FCFCFC?text=+) #FCFCFC |
| Light_Gray_2 | ![#808080](https://via.placeholder.com/10/808080?text=+) #808080 |
| Light_Gray_3 | ![#A4A4A4](https://via.placeholder.com/10/A4A4A4?text=+) #A4A4A4 |
| Dark Gray | ![#26262D](https://via.placeholder.com/10/26262D?text=+) #26262D |
<br/>

## Font Reference

- Mulish Light
- Mulish Regular
- Mulish bold
- Mulish Medium
<br/>

## Features

- Users can view and search different category news.
- login , signup and signout.
- Added hyperlink to view more details about the news.
