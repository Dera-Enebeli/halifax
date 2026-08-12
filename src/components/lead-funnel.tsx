"use client"

import { FunnelProvider, useFunnel, type InterestType } from "@/lib/funnel-store"
import LeadForm from "@/components/lead-form"
import LeadStepConsultation from "@/components/lead-step-consultation"

function FunnelInner() {
  const { state } = useFunnel()

  if (state.submitted) {
    return <LeadStepConsultation />
  }

  return <LeadForm />
}

export default function LeadFunnel({ interest }: { interest?: InterestType }) {
  return (
    <FunnelProvider initialInterest={interest}>
      <FunnelInner />
    </FunnelProvider>
  )
}
