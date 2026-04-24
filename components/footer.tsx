import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#041c1c] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Address */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-teal-400">
            <MapPin size={20} />
            <h4 className="font-semibold text-white">Address</h4>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            A108 Adam Street <br />
            New York, NY 535022
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-teal-400">
            <Phone size={20} />
            <h4 className="font-semibold text-white">Contact</h4>
          </div>
          <p className="text-sm text-gray-300">
            Phone: +1 5589 55488 55 <br />
            Email: info@example.com
          </p>
        </div>

        {/* Opening Hours */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-teal-400">
            <Clock size={20} />
            <h4 className="font-semibold text-white">Opening Hours</h4>
          </div>
          <p className="text-sm text-gray-300">
            Mon-Sat: 11AM - 23PM <br />
            Sunday: Closed
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Follow Us</h4>

          <div className="flex gap-3">
            {[
            { icon: <FaTwitter size={16} /> },
            { icon: <FaFacebookF size={16} /> },
            { icon: <FaInstagram size={16} /> },
            { icon: <FaLinkedinIn size={16} /> },
            ].map((item, i) => (
              <button
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-teal-400 hover:text-teal-400 transition"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-400">
        <p>
          © Copyright <span className="font-semibold text-white">Travely</span> All Rights Reserved
        </p>
        {/* <p className="mt-1">
          Designed by <span className="text-teal-400">BootstrapMade</span>
        </p> */}
      </div>
    </footer>
  )
}