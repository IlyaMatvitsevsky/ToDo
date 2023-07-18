import './globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const inter = Barlow({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'To Do',
  description: 'To Do List',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          'bg-blue-300 rounded-lg h-full w-full overflow-hidden overflow-y-scroll'
        )}
      >
        {children}
      </body>
    </html>
  )
}
