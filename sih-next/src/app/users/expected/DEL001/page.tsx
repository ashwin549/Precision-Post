'use client'
import { TooltipProvider } from '@/components/ui/tooltip'
import { OrderDetails } from "@/components/users-ui/order";
import React from 'react'

function ordercheck() {
  return (
    <TooltipProvider>
      <OrderDetails />
    </TooltipProvider>
  );
}

export default ordercheck