const WHATSAPP_NUMBER = "PLACEHOLDER" // Set this to your WhatsApp number in international format, e.g. "+14155551234"

export function buildWhatsAppLink(data: Record<string, string>): string {
  const lines = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)

  const text = encodeURIComponent(lines.join("\n"))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function openWhatsApp(data: Record<string, string>): void {
  const url = buildWhatsAppLink(data)
  window.open(url, "_blank")
}
