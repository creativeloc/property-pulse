const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// Fetch All properties
async function fetchProperties() {
  try {
    // Handle case when when the domain is not available yet
    if (!apiDomain) {
      return []
    }

    const res = await fetch(`${apiDomain}/properties`, { cache: "no-store" })

    if (!res.ok) {
      throw new error("Failed to fetch data")
    }

    return res.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

// Fetch Single properties
async function fetchProperty(id) {
  try {
    // Handle case when when the domain is not available yet
    if (!apiDomain) {
      return null
    }

    const res = await fetch(`${apiDomain}/properties/${id}`)

    if (!res.ok) {
      throw new error("Failed to fetch data")
    }

    return res.json()
  } catch (error) {
    console.log(error)
    return null
  }
}

export { fetchProperties, fetchProperty }
