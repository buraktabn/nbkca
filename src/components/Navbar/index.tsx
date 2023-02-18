/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "../Layout/";
import Logo from "../Logo/";
import { useRouter } from "next/router";
import { menus } from "./menus";
import Menu from "./Menu";

export default function NavbarDefault({type}: any) {
  const [variant, setVariant] = useState("sticky");

  const router = useRouter()

  console.log("router: ", router)

  const variants = ["static", "floating", "sticky"];

  const [ open, setOpen] = useState(true);
  const handleOpen = () => setOpen((prev) => !prev)

  if(type === "menu") {
    return (
      <>
        <a href="/" className="template-logo w-inline-block">
          <img 
            style={{
              transform: "rotate(3.142rad)"
            }} 
            src="https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b808cb414f6b3cd445e7eb_Z.png" 
            loading="lazy" width="300" alt="" className="nbk-logo" 
          />
        </a>
        <Menu open={open} handleOpen={handleOpen} />
      </>
    )
  }
  
  return (
      <Navbar isBordered variant={variant as any} style={{width: "100%", background: "#000"}}>
        <Navbar.Brand style={{paddingLeft: "60px"}}>
          <Logo name="NBKCA" />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" style={{margin: "auto"}}>
          {menus?.map((menu, index) => <Navbar.Link className="nav-title" isActive={router.route === menu?.slug} key={index} href={menu?.slug}>{menu?.name}</Navbar.Link>)}
        </Navbar.Content>
        {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
      </Navbar>


  )
}