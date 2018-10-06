const articles = [
  {
    "id": 1,
    "title": "Artículo de prueba",
    "content": "Lorem ipsum"
  }
]
const subscriptions = [
  {
    "user": 1,
    "subscriptor": 2
  }
]
const requests = [
  {
    "from": 2,
    "to": 1,
    "status": "pending/accepted/rejected"
  }
]
const responses = [
  {
    "from": 1,
    "to": 2,
    "accepted": true,
    "read": false
  }
]

if (!localStorage.getItem('social.articles'))
  localStorage.setItem("social.articles", JSON.stringify(articles))
if (!localStorage.getItem('social.subscriptions'))
  localStorage.setItem('social.subscriptions', JSON.stringify(subscriptions))
if (!localStorage.getItem('social.requests'))
  localStorage.setItem('social.requests', JSON.stringify(requests))
if (!localStorage.getItem('social.responses'))
  localStorage.setItem('social.responses', JSON.stringify(responses))

const articlesUpdated = JSON.parse(localStorage.getItem("social.articles"))
articlesUpdated.push({id: articles.length + 1, title: 'Artículo 2', content: 'Lorem Ipsum'})
localStorage.setItem("social.articles", JSON.stringify(articlesUpdated))
