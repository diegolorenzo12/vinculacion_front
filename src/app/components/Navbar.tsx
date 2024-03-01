'use client'
import React from 'react'
import {Navbar as Navbarui, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import { ChevronDown } from './Chevron';
import Image from 'next/image';
import { useUserContext } from '../providers';


export default function Navbar() {
  const { userData } = useUserContext();

  return (
    <Navbarui isBordered isBlurred={false} className="dark text-white">
      <NavbarBrand>
        <Image
            src="/cetys_logo_white.png"
            width={50}
            height={50}
            alt="Cetys logo"
            className='mr-3'
        />
        <p className="font-bold text-inherit">Admin portal</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/admin/reports">
            Reports Stats
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/admin/review" aria-current="page">
            Review applications
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbarui>
  )
}
