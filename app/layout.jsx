import '@/assets/styles/globals.css'

// Copy and change this on any page where you want to change the metadata
export const metadata = {
  title: 'Property Pulse | Find the Perfect Rental',
  description: 'Find the perfect rental property with Property Pulse. Search for apartments, houses, and condos for rent in your area.',
  keywords: 'rental, property, apartment, house, condo, real estate',
}

const MainLayout = ({children}) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>      
    </html>

  )
}

export default MainLayout