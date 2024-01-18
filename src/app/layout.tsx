import NavBar from "@/components/atmos/NavBar/NavBar"
import Footer from "@/components/molecules/Footer/Footer"

export const metadata = {
  title: 'Swivel',
  description: 'Generated by Next.js',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{
            backgroundImage: `url("bg_img.jpg")`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} ><NavBar/>{children}<Footer/></body>
    </html>
  )
}
