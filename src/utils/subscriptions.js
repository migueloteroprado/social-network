const getSubscriptionState = (currentUser, user, subscriptions) => {
  if (!user || !currentUser || !subscriptions) {
    return null
  }
  if (user.login.uuid === currentUser.login.uuid) {
    return 'currentUser'
  }
  const subscribed = subscriptions.filter(
    subscription => 
      subscription.user === user.login.uuid && subscription.subscriptor === currentUser.login.uuid
  )
  if (subscribed.length > 0) {
    return subscribed[0].state
  } else {
    return 'unsubscribed'
  }
}

export default getSubscriptionState