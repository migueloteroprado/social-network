// Get author subscription state
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

// Compose full name from first and last names
export const getName = (author) => (author ? `${author.name.first} ${author.name.last}` : '')

// Returns a user given its UUID
export const getAuthorByUUID = (uuid, authors) => {
  const authorFiltered = authors.filter(author => author.login.uuid === uuid)
  return authorFiltered.length > 0 ? authorFiltered[0] : null
}