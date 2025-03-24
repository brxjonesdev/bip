import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-dvh flex flex-col'>
        {children}
    </main>
  )
}
