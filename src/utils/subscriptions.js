const getSubscriptionState = (currentUser, user, subscriptions, requests) => {
  if (user.login.uuid === currentUser.login.uuid) {
    return 'currentUser';
  }
  const subscribed = subscriptions.filter(
    subscription => 
      subscription.user === user.login.uuid && subscription.subscriptor === currentUser.login.uuid
  );
  if (subscribed.length > 0) {
    return ' subscribed';
  } else {
    const pending = requests.filter(
      request => 
        request.status === 'pending' && request.from === currentUser.login.uuid && request.to === user.login.uuid
    );
    if (pending.length > 0) {
      return 'pending'
    }
  }
}

export default getSubscriptionState