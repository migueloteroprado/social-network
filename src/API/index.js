// Fetch users from API
const getUsers = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      return {error: true, message: 'Error Loading Authors'}
    }
    return response.json()
  } catch (error) {
    console.log(error)
    return error
  }
}

export default getUsers
