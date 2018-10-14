# Social Network

### Description

Social Network allows users to publish articles and follow other users to watch their articles. 
To follow one user, a subscription request is sent to this user, and he must accept it in order to can access this author's published content.
To access any part of the application, user must be logged in.

### Install

To install the application, execute on the project root folder:
```cmd
nmp install
```

### Execution

To execute in development mode, execute:
```cmd
nmp start
```

### Build

To build the bundled production package, execute:
```
npm run build
```

# Notes

### List of users

The list of users is retrieved from randomuser.me API
The seed "socialnetwork" is passed in the request to ensure it always return the same list of users.
20 users will be returned.
The complete URL will be:  
https://randomuser.me/api?seed=socialnetwork&results=20

The list of returned users should be:

| Name     |      Username      |  Password |
|----------|:------------------:|----------:|
| col 1 is |  left-aligned      | $1600     |
| col 2 is |    centered        |   $12     |
| col 3 is | right-aligned      |    $1     |
    

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

