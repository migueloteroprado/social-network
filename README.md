# Social Network

## Description

Social Network allows users to publish articles and follow other users to watch their articles. 
To follow one user, a subscription request is sent to this user, and he must accept it in order to can access this author's published content.
To access any part of the application, user must be logged in.

## Install

To install the application, execute on the project root folder:
```cmd
nmp install
```

## Execution

To execute in development mode, execute:
```cmd
nmp start
```

## Build

To build the production bundle, execute:
```
npm run build
```
----


## List of users

The list of users is retrieved from randomuser.me API
The seed "socialnetwork" is passed in the request to ensure it always return the same list of users.
20 users will be returned.
The complete URL will be:  
https://randomuser.me/api?seed=socialnetwork&results=20

The list of returned users should be:

| Name                 | Username            | Password  | UUID                                 |
|----------------------|---------------------|-----------|--------------------------------------|
| Nalan Durak          | smallswan392        | freedom   | b49c9afe-b1b4-4d2f-bc5d-d5bfd9211dcf |
| Marvin Bird          | yellowgoose608      | nebraska  | 714136d1-e7a9-40a1-a59e-ad9ebca489af |
| Holly Kumar          | brownrabbit444      | wasser    | b1ed4b2d-b34f-473f-9a2b-3065d6623cd0 |
| Nichal Teixeira      | yellowpeacock213    | donjuan   | 0894ac37-cc07-4f7f-99d7-1f66fc4fcd28 |
| Travis Reid          | sadbear304          | sluggo    | 6ff61c54-ad51-47eb-a88d-3c604895586e |
| Ilona Jokinen        | organicladybug661   | maxim     | d770c7eb-9a01-41d1-8cb8-ff55520ca48f |
| Jarle Christophersen | lazypeacock494      | nympho    | 33f86671-a186-41b1-b9a4-0dccd043c7a1 |
| Martha Fitzpatrick   | beautifulleopard524 | stewart   | b02d966d-77d2-484c-95a7-d3cf3c66fa3a |
| Ece Doğan            | smallpeacock761     | tools     | 772d7023-cde2-456e-b17b-f6a1c6aa3699 |
| Carolyn Lord         | greenbird680        | titts     | 04fb2afc-0fc3-4ee9-b4f1-10113562af6f |
| Leah Robinson        | brownzebra613       | mail      | 646f18fe-92d7-47db-833b-bad105964f66 |
| Ronny Lefebvre       | orangezebra169      | christie  | ce5056ab-45a0-461d-b6f6-39b8b31eaf9b |
| Romeo Bremseth       | greendog370         | maxx      | aa997981-6471-43cc-b734-bcffc271c762 |
| Jarand Bakkeli       | heavybear958        | mollydog  | 50248dbd-0f13-4a8c-b80f-fa5bcd6aed42 |
| Alex Laurent         | happyrabbit641      | lamer     | baf48398-b48d-46f2-a028-b85d16d18796 |
| Randolf Nei          | brownswan906        | harder    | 3b74ca43-8bb2-40c4-8f79-b5ea64fba4f3 |
| Cleusa Monteiro      | ticklishrabbit165   | beowulf   | 8b6e7d3e-cbbc-4bab-8119-14fd5e4983ee |
| Hayley Wood          | blackdog338         | goldberg  | 09b38e7a-e160-43ee-b3fb-de50af3bed9e |
| Samu Karvonen        | heavymeercat123     | vauxhall  | a2897af4-0855-474e-aef8-9d8f6a74e681 |
| Max Burke            | organicladybug821   | mnbvcxz   | 9d93f9ee-fd14-4b6d-99ae-39108258f534 |

Every user in the results array will have the following format:
```json
{
  "gender": "female",
  "name": {
  "title": "mrs",
  "first": "nalan",
  "last": "durak"
  },
  "location": {
    "street": "6029 tunalı hilmi cd",
    "city": "yalova",
    "state": "ardahan",
    "postcode": 73035,
    "coordinates": {
    "latitude": "71.0777",
    "longitude": "147.4756"
  },
  "timezone": {
    "offset": "+6:00",
    "description": "Almaty, Dhaka, Colombo"
  }
  },
  "email": "nalan.durak@example.com",
  "login": {
    "uuid": "b49c9afe-b1b4-4d2f-bc5d-d5bfd9211dcf",
    "username": "smallswan392",
    "password": "freedom",
    "salt": "hUtYj0SW",
    "md5": "b7233aae55199c1a2d647ba32967bd1c",
    "sha1": "a115e08eec2350e32380be31f59b14d1b0f2e17d",
    "sha256": "8b8af680fb69434bed337a96ac4a6a5c3aeff28ba9658f8d21fdc42629afedee"
  },
  "dob": {
    "date": "1983-10-01T10:50:55Z",
    "age": 35
  },
  "registered": {
    "date": "2017-08-23T00:46:57Z",
    "age": 1
  },
  "phone": "(611)-187-9824",
  "cell": "(120)-248-0846",
  "id": {
    "name": "",
    "value": null
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/80.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
  },
  "nat": "TR"
}
```
---

## Pages / Routes

* **Home Page**
  Shows a welcome screen
* **Login**
  Shows a form to sign in into the application.
  The user must enter his user name and password
  Other routes will be unavailble if no user is logged in, and links to theese pages will redirect to login screen
* **Authors**
  Shows a list of all users (except the user who is logged in)
  For every user, the following information will be displayed:
  - Name
  - Email
  - Photo (medium)
  - Subscription state (Unsubscribed, Request Pending, Subscribed, or Subscription Rejected)
  - A link to make a subscription request to this user (or remove if the user is subscribed yet)
  Cliking in the name or the users photo, the user detail page wil be shown
* **Author Detail**
  Shows the complete information about the user selected:
  - Name
  - Photo (big)
  - Phone
  - Cell
  - Email
  - Gender
  - Age
  - Location
  - Subscription state (Subscribed, Request Pending, Subscribed or Request Rejected)
  - Link to request subscription or remove it if we are subscribed to that user yet
  - List of Articles published by this user, **ONLY** if we are subscribed (we made him a subscription request, and the user accepted it)
* **Profle**
  The profile of the user who is logged in.
  The page Shows:
  - The same information that the Author's detail page (except subscription related fields)
  - A form to publish new Articles (Title and content).
  The content field admits html
  - A list of all articles published by the logged in user
* **Logout**

---

## LocalStorage

The articles and subscriptions are saved in the browser's LocalStorage:

#### Articles

Key: **social.articles**
Fields: id, author UUID, title, content

```json
{
  "id": 1, 
  "author": "b49c9afe-b1b4-4d2f-bc5d-d5bfd9211dcf",
  "title": "This is the Article Number One",
  "content": "Lorem ipsum ........"
}
```
The article list will be loaded at the App startup, and will be saved into the articles reducer.
When a new article is added, the whole article list will be saved back into the LocalStorage

#### Subscriptions

Key: **social.subscriptions**
Fields: author, subscriptor, state

```json
{
  "author": "04fb2afc-0fc3-4ee9-b4f1-10113562af6f",
  "subscriptor": "b49c9afe-b1b4-4d2f-bc5d-d5bfd9211dcf",
  "state": "pending"
}
```

The subcription list will be loaded at the App startup, and saved into the subscriptions reducer.
When a change in subscriptions list occurs (add, remove, or change subscription state), the whole list will be saved back to the LocalStorage

---

The app will first load the authors list from randomuser API before showing anything else. If an error occurs, a message will be shown and the app won't start

After that, it will load articles and subscriptions from LocalStorage and will render the application

---

## SessionStorage

The current logged in user in saved also in the SessionStorage (Key **social.currentAuthor**), allowing to reload the page without signing in again

---


## Actions / Reducers

###login

Reducer:

```json
{
  "isLogging": false,     // indicates if a login attempt is in curse
  "currentAuthor": null,  // the authos currently logged id
  "error": null           // Login error, if any
}
```

Actions:

LOGIN_STARTED
LOGIN_ERROR
LOGIN_SUCCESS
LOGIN_RESET
LOGOUT

### authors

Reducer:

```json
{
  authors: [],    // List of authors obtainde from randomuser.me API
  error: null,    // Loading error, if any
  loading: false  // indicates if authors list is currently loading
}
```

Actions:

LOAD_AUTHORS_STARTED
LOAD_AUTHORS_ERROR
LOAD_AUTHORS_SUCCESS

### articles

Reducer:

```json
{
  "articles": [], // List of articles
  "id": 1         // Id of the last article published
}
```

Actions:

LOAD_ARTICLES
ADD_ARTICLE

### subscriptions

Reducer:

```json
{
  subscriptions: []   // List of subscriptions
}
```

Actions:

LOAD_SUBSCRIPTIONS
ADD_SUBSCRIPTION
REMOVE_SUBSCRIPTION
ACCEPT_SUBSCRIPTION
REJECT_SUBSCRIPTION
