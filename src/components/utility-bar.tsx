import { Phone, Mail, MapPin } from "lucide-react"

export default function UtilityBar() {
  return (
    <div className="hidden sm:block bg-near-black text-white/80 text-[15px] sm:text-[13px]">
      <div className="max-w-page section-padding">
        <div className="flex items-center justify-between h-12 sm:h-9">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5 text-white/60">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="font-medium">East Bay</span>
            </span>
            <span className="text-white/20">|</span>
            <a
              href="tel:+15105075088"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Phone className="h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5" />
              <span className="font-medium sm:font-normal">(510) 507-5088</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:geoffrey@halifaxproperties.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span>geoffrey@halifaxproperties.com</span>
            </a>
          </div>
          <a
            href="/consultation"
            className="text-white/70 hover:text-white transition-colors duration-200 font-medium sm:font-normal text-[14px] sm:text-xs"
          >
            Contact Geoffrey Enebeli
          </a>
        </div>
      </div>
    </div>
  )
}
