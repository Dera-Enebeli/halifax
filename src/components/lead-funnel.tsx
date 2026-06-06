"use client"

import { FunnelProvider, useFunnel } from "@/lib/funnel-store"
import LeadStepInterest from "@/components/lead-step-interest"
import LeadStepContact from "@/components/lead-step-contact"
import LeadStepSpecs from "@/components/lead-step-specs"
import LeadStepConsultation from "@/components/lead-step-consultation"

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i < current ? "w-8 bg-terracotta" : i === current ? "w-8 bg-terracotta/50" : "w-2 bg-cream/30"
          }`}
        />
      ))}
    </div>
  )
}

function FunnelInner() {
  const { state } = useFunnel()
  const totalSteps = 4

  switch (state.step) {
    case 1:
      return (
        <>
          <StepIndicator current={0} total={totalSteps} />
          <LeadStepInterest />
        </>
      )
    case 2:
      return (
        <>
          <StepIndicator current={1} total={totalSteps} />
          <LeadStepContact />
        </>
      )
    case 3:
      return (
        <>
          <StepIndicator current={2} total={totalSteps} />
          <LeadStepSpecs />
        </>
      )
    case 4:
      return (
        <>
          <StepIndicator current={3} total={totalSteps} />
          <LeadStepConsultation />
        </>
      )
    default:
      return <LeadStepInterest />
  }
}

export default function LeadFunnel() {
  return (
    <FunnelProvider>
      <FunnelInner />
    </FunnelProvider>
  )
}
