import { Phone, Mail, MapPin } from "lucide-react"

export default function UtilityBar() {
  return (
    <div className="hidden sm:block bg-cream-dark text-near-black/85 text-sm">
      <div className="max-w-page section-padding">
        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-near-black/75">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="font-medium">East Bay</span>
            </span>
            <span className="text-near-black/40">|</span>
            <a
              href="tel:+15105075088"
              className="flex items-center gap-1.5 hover:text-near-black transition-colors duration-200"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span className="font-normal lg:font-medium">(510) 507-5088</span>
            </a>
            <a
              href="mailto:Enebly@aol.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-near-black transition-colors duration-200"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span>Enebly@aol.com</span>
            </a>
          </div>
          <a
            href="/consultation"
            className="text-near-black/80 hover:text-near-black transition-colors duration-200 font-medium text-xs sm:text-sm"
          >
            Contact Geoffrey Enebly
          </a>
        </div>
      </div>
    </div>
  )
}
