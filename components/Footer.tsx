import { Camera, Phone, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
         <div className="space-y-4">

  <div className="flex items-center gap-3">

    <div className="w-12 h-12 flex items-center justify-center">

      <img
        src="/logofoya.png"
        alt="FOYA Logo"
        className="w-full h-full object-contain"
      />

    </div>

    <span className="text-2xl font-bold">
      FOYA
    </span>

  </div>

  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
    Brand kaos lokal dengan desain modern, premium, dan nyaman untuk aktivitas harianmu.
  </p>

            {/* Social Media */}

            <div className="flex gap-3 pt-2">

              {[
                {
                  icon: Phone,
                  href: "https://wa.me/6282233192856",
                  label: "WhatsApp",
                },

              {
  icon: Camera,
  href: "https://www.instagram.com/foya__official?igsh=Nmw5d2N0MGhtbGNz",
  label: "Instagram",
},

                {
                  icon: Music2,
                  href: "https://www.tiktok.com/@foya.official?_r=1&_t=ZS-97TgSvm1alt",
                  label: "TikTok",
                },

              ].map(({ icon: Icon, href, label }) => (

                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-purple-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >

                  <Icon size={18} />

                </a>

              ))}

            </div>

          </div>

          {/* Menu */}

          <div className="space-y-4">

            <h3 className="text-lg font-semibold">
              Menu
            </h3>

            <ul className="space-y-3">

              {[
                {
                  label: "Beranda",
                  href: "#home",
                },

                {
                  label: "Koleksi Produk",
                  href: "#koleksi",
                },

                {
                  label: "Tentang FOYA",
                  href: "#tentang",
                },

                {
                  label: "Testimoni",
                  href: "#testimoni",
                },

              ].map((link) => (

                <li key={link.label}>

                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >

                    {link.label}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div className="space-y-4">

            <h3 className="text-lg font-semibold">
              Hubungi Kami
            </h3>

            <div className="space-y-3 text-sm text-gray-400">

              <p>
                WhatsApp : +62 822-3319-2856
              </p>

              <p>
                Instagram : @foya__official
              </p>

              <p>
                TikTok : @foya.id
              </p>

              <p>
                Every day : 08.00 - 22.00 WIB
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2026 Foya x Pnfiles. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}