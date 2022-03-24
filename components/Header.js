import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{marginLeft: "2rem", marginRight: "1rem"}}>
        Top 100 Fifa Songs
      </Navbar.Brand>
      <Nav style={{marginRight: "1rem"}}>
        <Link href='/'>
          <a>Rankings</a>
        </Link>
      </Nav>
{/*       <Nav style={{marginRight: "1rem"}}> */}
{/*         <Link href='/tierlist'> */}
{/*           <a>Tier List</a> */}
{/*         </Link> */}
{/*       </Nav> */}
      <Nav style={{marginRight: "1rem"}}>
        <Link href='/top'>
          <a>Top 100</a>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default (Header)