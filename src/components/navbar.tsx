// StyledNavbar.tsx
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    margin-bottom: 2rem;
`;

const NavbarLink = styled.a`
  color: #006269;
  padding: 0 15px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &.active {
    color: #aaa;
    pointer-events: none;
  }
`;

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarLink className={(window.location.pathname == "/megasena") ? 'active' : ''} href='/megasena'>
                Mega Sena
            </NavbarLink>
            <NavbarLink className={window.location.pathname == "/lotofacil" ? 'active' : ''} href='/lotofacil'>
                Lotofácil
            </NavbarLink>
            <NavbarLink className={window.location.pathname == "/quina" ? 'active' : ''} href='/quina'>
                Quina
            </NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar;