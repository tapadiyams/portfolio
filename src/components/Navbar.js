import React from 'react'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experiences' },
  { name: 'Resume', href: './assets/docs/Shubham Tapadiya Resume.pdf', target: '_blank' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Empty - name is now in App header */}
          <div></div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.target ? "noopener noreferrer" : undefined}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu (simplified) */}
          <div className="sm:hidden">
            <div className="flex space-x-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  className="text-gray-700 hover:text-gray-900 text-xs font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
