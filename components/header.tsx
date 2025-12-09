"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "Who We Serve", href: "#who-we-serve" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["home", "about", "what-we-do", "who-we-serve", "contact"]

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/fafs-logo.png"
                alt="FAFS - Fair Agri-Food Systems"
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm font-medium transition-colors py-2 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {/* Active underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              )
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button onClick={(e) => handleNavClick(e as any, "#contact")} className="bg-primary hover:bg-green-700">
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white px-4 sm:px-6 py-4 sm:py-6 shadow-xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/fafs-logo.png"
                alt="FAFS - Fair Agri-Food Systems"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-1 py-6">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`-mx-3 block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-green-50 border-l-4 border-primary"
                          : "text-foreground hover:bg-secondary active:bg-secondary/80"
                      }`}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>
              <div className="py-6">
                <Button
                  onClick={(e) => handleNavClick(e as any, "#contact")}
                  className="w-full bg-primary hover:bg-green-700"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
