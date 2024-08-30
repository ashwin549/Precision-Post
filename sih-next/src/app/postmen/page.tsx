
import Dashboard from '@/components/Dashboard'
import { TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'

export default async function page() {
  return (
    <TooltipProvider>
        <Dashboard></Dashboard>
    </TooltipProvider>
  )
}

