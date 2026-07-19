// @ts-ignore
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fabian Robinson',
  description: 'Build my portfolio website to showcase my skills and work',
  icons: {
    icon: '/assets/fabian-logo22.PNG',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
      
    </html>
  )
}
