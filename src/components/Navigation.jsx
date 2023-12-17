import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text className="text-danger">
            <p>Poke Collection</p>
          </Navbar.Text>
        </Navbar.Collapse>
        <Nav className="ms-3">
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
        
        <NavLink to="/pokemons" className={activeClass}>
          Pokemones
        </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
