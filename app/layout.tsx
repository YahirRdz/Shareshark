import NavBar from "@/components/NavBar"
import "./global.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'SharePortafolio',
  description: 'ShowCase and discover remarable developer Portafolios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <NavBar />
          <main>
            {children}
          </main>
        <Footer />
        </body>
    </html>
  )
}
