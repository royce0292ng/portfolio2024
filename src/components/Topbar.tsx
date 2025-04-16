"use client"

import { NAV_LINKS, NAV_MORE } from "@/constants"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react"
import More from "./More"
import { useState } from "react";

const Topbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" color="foreground" className=" transition hover:scale-150">
            {/* <Image src="/next.svg" alt="logo" width={74} height={29}/> */}
            <p className="font-bold text-inherit">ROYCE</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        {NAV_LINKS.map((link => (
                <NavbarItem className="hidden md:flex">
                  <Link href={link.href} key={link.key}  color="foreground" >
                      {link.label}
                  </Link>
               </NavbarItem>
            )))}
        <NavbarItem className="hidden md:flex">
          <More/>
        </NavbarItem>
        <NavbarItem className="hidden max-md:flex">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarMenu className="bg-zinc-700" >
            {NAV_LINKS.map((item) => (
              <NavbarMenuItem key={item.key}>
                <Link
                  className="w-full text-white"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
            {NAV_MORE.map((item) => (
              <NavbarMenuItem key={item.key}>
                <Link
                  className="w-full text-white"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Topbar