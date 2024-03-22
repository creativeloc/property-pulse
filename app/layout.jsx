import "@/assets/styles/globals.css"

export const metadata = {
  title: "Property Pulse | Find the Perfect Rental.",
  description: "Site to find your dream property",
  keywords: "rentals, find rentals, find properties"
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
export default MainLayout
