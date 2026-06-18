"use client"

import { useEffect } from "react"
import { FunnelProvider, useFunnel } from "@/lib/funnel-store"
import LeadForm from "@/components/lead-form"

function PresetValuationForm() {
  const { dispatch } = useFunnel()

  useEffect(() => {
    dispatch({ type: "SET_INTEREST", payload: "homeowner" })
  }, [dispatch])

  return <LeadForm />
}

export function ValuationFormWrapper() {
  return (
    <FunnelProvider>
      <PresetValuationForm />
    </FunnelProvider>
  )
}
