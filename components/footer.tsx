import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-base font-semibold text-gray-900">SERP Strategists</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              The autonomous search growth agent for SEO + GEO. Your website grows itself.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li><a href="#solution" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#capabilities" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Capabilities</a></li>
              <li><a href="#integrations" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</Link></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SERP Strategists. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
