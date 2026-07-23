"use client"

import { FunnelProvider } from "@/lib/funnel-store"
import LeadForm from "@/components/lead-form"

export function ValuationFormWrapper() {
  return (
    <FunnelProvider>
      <LeadForm />
    </FunnelProvider>
  )
}
