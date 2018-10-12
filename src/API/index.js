// Fetch users from API
const getUsers = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Error Loading Authors')
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export default getUsers
