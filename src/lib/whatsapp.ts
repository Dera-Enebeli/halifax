const WHATSAPP_NUMBER = "15105075088"

export function buildWhatsAppLink(data: Record<string, string>): string {
  const header = "🔔 New Lead from halifaxproperties.com"
  const lines = [header, "---"]

  const orderedKeys = ["Interest", "Name", "Email", "Phone", "City", "Address", "Property Type", "Sq Footage", "Bedrooms", "Bathrooms"]

  for (const key of orderedKeys) {
    if (data[key]) {
      lines.push(`${key}: ${data[key]}`)
    }
  }

  for (const [key, value] of Object.entries(data)) {
    if (!orderedKeys.includes(key) && value) {
      lines.push(`${key}: ${value}`)
    }
  }

  lines.push("---")
  lines.push("Geoffrey Enebeli | Halifax Properties & Investments")

  const text = encodeURIComponent(lines.join("\n"))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function openWhatsApp(data: Record<string, string>): void {
  const url = buildWhatsAppLink(data)
  window.open(url, "_blank")
}
