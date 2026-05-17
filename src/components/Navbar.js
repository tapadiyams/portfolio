import React from 'react'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experiences' },
  { name: 'Resume', href: './assets/docs/Shubham Tapadiya Resume.pdf', target: '_blank' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="bg-transparent border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-12">
          {/* Empty - navigation moved to header */}
          <div></div>
        </div>
      </div>
    </nav>
  )
}
