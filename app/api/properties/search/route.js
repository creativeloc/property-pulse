import connectDB from "@/config/database"
import Property from "@/models/Property"

// GET /api/properties/search
export const GET = async (request) => {
  try {
    await connectDB

    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location")
    const propertyType = searchParams.get("propertyType")

    console.log(location, propertyType)

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("Something went wrong", { status: 500 })
  }
}
