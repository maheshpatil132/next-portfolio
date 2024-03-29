import Header from '@/components/Header'
import './globals.css'
import { Roboto } from 'next/font/google'
import Provider from './Provider'

// const inter = Roboto({ subsets: ['latin'] , weight : ['400'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
