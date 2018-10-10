export const getSubscriptionState = (currentAuthor, author, subscriptions) => {
  if (!author || !currentAuthor || !subscriptions) {
    return null
  }
  if (author.login.uuid === currentAuthor.login.uuid) {
    return 'currentUser'
  }
  const subscribed = subscriptions.filter(
    subscription => 
      subscription.author === author.login.uuid && subscription.subscriptor === currentAuthor.login.uuid
  )
  if (subscribed.length > 0) {
    return subscribed[0].state
  } else {
    return 'unsubscribed'
  }
}

export const getName = (author) => (author ? `${author.name.first} ${author.name.last}` : '')
