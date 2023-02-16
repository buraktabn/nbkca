import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "../Layout/";
import Logo from "../Logo/";

export default function NavbarDefault() {
  const [variant, setVariant] = React.useState("sticky");

  const variants = ["static", "floating", "sticky"];
  
  return (
      <Navbar isBordered variant={variant as any} style={{width: "100%"}}>
        <Navbar.Brand>
          <Logo name="NBKCA" />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link isActive href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">What We Do</Navbar.Link>
          <Navbar.Link href="#">Press</Navbar.Link>
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