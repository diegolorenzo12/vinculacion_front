'use client'
import React from 'react'
import {Navbar as Navbarui, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import { ChevronDown } from './Chevron';
import { useUserContext } from '../providers';


export default function Navbar() {
  const { userData } = useUserContext();

  return (
    <Navbarui isBordered isBlurred={false} className="dark text-white">
      <NavbarBrand>
        <p className="font-bold text-inherit">Vinculacion Admin</p>
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
