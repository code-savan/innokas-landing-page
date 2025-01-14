import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Innokas Nigeria Limited (INL) ',
  description: 'Freshness all way round',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
