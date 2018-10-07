### LocalStorage

``` json
"social.articles": [
  {
    "id": 1,
    "title": "Artículo de prueba",
    "content": "Lorem ipsum"
  },
  ...
],
"social.subscriptions": [
  {
    "user": 1,
    "subscriptor": 2
  },
  ...
],
"social.requests": [
  {
    "from": 2,
    "to": 1,
    "status": "pending/accepted/rejected"
  },
  ...
],
"social.responses": [
  {
    "from": 1,
    "to": 2,
    "accepted": true,
    "read": false
  }
]
```

### Routes

/authors
/authors/:name
/requests
/login

### Components

- Header
- Login Form
- Users List
  - User
- Requests
  - Request
- Article Form




