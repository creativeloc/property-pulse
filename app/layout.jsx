import Navbar from "@/components/Navbar"
import "@/assets/styles/globals.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Property Pulse | Find the Perfect Rental.",
  description: "Site to find your dream property",
  keywords: "rentals, find rentals, find properties"
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
export default MainLayout
