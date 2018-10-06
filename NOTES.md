## LocalStorage

``` json
"social-network": {
  "articles": [
    {
      "id": 1,
      "title": "Artículo de prueba",
      "content": "Lorem ipsum"
    },
    ...
  ],
  "subscriptions": [
    {
      "user": 1,
      "subscriptor": 2
    },
    ...
  ],
  "requests": [
    {
      "from": 2,
      "to": 1,
      "status": "pending/accepted/rejected"
    },
    ...
  ],
  "responses": [
    {
      "from": 1,
      "to": 2,
      "accepted": true,
      "read": false
    }
  ]
}
```