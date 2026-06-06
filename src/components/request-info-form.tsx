"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import type { Property } from "@/lib/mock-data"

interface RequestInfoFormProps {
  property: Property
  children: React.ReactNode
}

const reasons = [
  { value: "", label: "Select a reason..." },
  { value: "first-time", label: "First-time buyer" },
  { value: "upgrading", label: "Upgrading to a larger home" },
  { value: "downsizing", label: "Downsizing" },
  { value: "relocating", label: "Relocating to the area" },
  { value: "investment", label: "Investment property" },
  { value: "second-home", label: "Second home / vacation" },
  { value: "other", label: "Other" },
]

const timelines = [
  { value: "", label: "Select a timeline..." },
  { value: "immediately", label: "Immediately" },
  { value: "1-3", label: "1 - 3 months" },
  { value: "3-6", label: "3 - 6 months" },
  { value: "6-plus", label: "6+ months" },
  { value: "browsing", label: "Just browsing" },
]

const budgets = [
  { value: "", label: "Select a budget..." },
  { value: "under-500k", label: "Under $500K" },
  { value: "500k-1m", label: "$500K - $1M" },
  { value: "1m-2m", label: "$1M - $2M" },
  { value: "2m-5m", label: "$2M - $5M" },
  { value: "5m-10m", label: "$5M - $10M" },
  { value: "10m-plus", label: "$10M+" },
  { value: "not-sure", label: "Not sure yet" },
]

const propertyTypes = [
  { value: "", label: "Any type" },
  { value: "house", label: "House" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "estate", label: "Estate" },
  { value: "villa", label: "Villa" },
]

export default function RequestInfoForm({ property, children }: RequestInfoFormProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
    timeline: "",
    budget: "",
    propertyType: "",
    message: "",
  })

  const updateField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          propertyTitle: property.title,
          propertyAddress: `${property.address}, ${property.city}, ${property.state} ${property.zip}`,
          propertyId: property.id,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Something went wrong")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white shadow-2xl z-50 p-0 data-[state=open]:animate-in data-[state=closed]:animate-out">
          <div className="sticky top-0 bg-white border-b border-warm-border px-6 py-4 flex items-center justify-between z-10">
            <Dialog.Title className="font-serif text-lg text-near-black" style={{ fontFamily: "var(--font-serif)" }}>
              Request Info
            </Dialog.Title>
            <Dialog.Close className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {submitted ? (
            <div className="px-6 py-12 text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: "var(--color-olive, #6B7D5E)" }} />
              <h3 className="font-serif text-xl text-near-black mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                Thanks for Your Interest!
              </h3>
              <p className="text-gray-500 mb-1">
                We&apos;ve received your request for:
              </p>
              <p className="font-medium text-near-black mb-4">
                {property.title}
              </p>
              <p className="text-sm text-gray-400">
                Alex Rivera will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
              <div className="p-3 mb-2" style={{ background: "var(--color-cream, #F5F0E8)" }}>
                <p className="text-sm font-medium text-near-black">
                  {property.title}
                </p>
                <p className="text-xs" style={{ color: "var(--color-terracotta, #C04A1A)" }}>
                  {property.address}, {property.city}, {property.state}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Where do you currently live?
                </label>
                <Input
                  placeholder="City, State"
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why are you looking?
                  </label>
                  <Select
                    options={reasons}
                    value={form.reason}
                    onChange={(e) => updateField("reason", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Timeline
                  </label>
                  <Select
                    options={timelines}
                    value={form.timeline}
                    onChange={(e) => updateField("timeline", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range
                  </label>
                  <Select
                    options={budgets}
                    value={form.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <Select
                    options={propertyTypes}
                    value={form.propertyType}
                    onChange={(e) => updateField("propertyType", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Questions or comments?
                </label>
                <textarea
                  placeholder="Tell us more about what you're looking for..."
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={3}
                  className="w-full rounded border border-warm-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-terracotta transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Request"
                )}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Alex Rivera will contact you about this property.
              </p>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
