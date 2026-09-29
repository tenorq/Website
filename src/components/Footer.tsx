import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-16 px-6 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 text-[#9ca3af] max-w-sm leading-relaxed">
              Tenorq is a technology company building products that help
              financial institutions and merchants work better together.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[#9ca3af]">
              <li>
                <a
                  href="#products"
                  className="hover:text-[#2f5d8c] transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="hover:text-[#2f5d8c] transition-colors"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  className="hover:text-[#2f5d8c] transition-colors"
                >
                  Company
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-[#9ca3af]">
              <li>hello@tenorq.com</li>
              {/* <li>
                <a href="#" className="hover:text-[#2f5d8c] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2f5d8c] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2f5d8c] transition-colors">
                  GitHub
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs font-medium tracking-widest text-[#9ca3af]/50 uppercase">
          <span>© {currentYear} Tenorq. All rights reserved.</span>
          {/*
            TODO: Add links to Privacy Policy and Terms of Service when available
            */}
          {/* <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
