import { Phone, Mail, MapPin } from "lucide-react"

export default function UtilityBar() {
  return (
    <div className="bg-near-black text-white/80 text-[13px]">
      <div className="max-w-page section-padding">
        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="hidden sm:flex items-center gap-1.5 text-white/50">
              <MapPin className="h-3 w-3" />
              <span>Serving the East Bay</span>
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="tel:+15105550142"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>(510) 555-0142</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="mailto:alex@halifaxproperties.com"
              className="items-center gap-1.5 hover:text-white transition-colors duration-200 hidden sm:flex"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>alex@halifaxproperties.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Login
            </a>
            <span className="text-white/20">/</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
