// StyledNavbar.tsx
import styled from 'styled-components';
import Navbarlk from './elements/navbarLink';

interface linkProps {
    href: string;
    color: string;
    name: string;
    fsize: string;
}
interface navbarProps {
    links: linkProps[];
    pathActive: string;
}

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
    font-family: 'Roboto', sans-serif;
`;

function Navbar(props: navbarProps) {
    

    return (
        <NavbarContainer>
            {props.links.map((link, index) => {
                return (
                    <Navbarlk color={link.color} fsize={link.fsize} href={link.href} name={link.name} active={(link.href == props.pathActive)? true : false} key={index}/>
                )
            })}
        </NavbarContainer>
    )
}

export default Navbar;