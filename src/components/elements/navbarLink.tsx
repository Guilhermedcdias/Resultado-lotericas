// StyledNavbar.tsx
import styled from 'styled-components';

interface linkProps {
    href: string;
    color: string;
    name: string;
    fsize: string;
    active?: boolean;
}

const NavbarLink = styled.a<linkProps>`
  color: ${props => props.color ?? "#000"};
  padding: 0 15px;
  text-decoration: none;
  font-size: ${props => props.fsize ?? "1rem"};
  font-weight: bold;
  cursor: pointer;

  &.active {
    color: #aaa;
    pointer-events: none;
  }
`;

function Navbarlk(props: linkProps) {
    return (
        <NavbarLink href={props.href} color={props.color} name={props.name} fsize={props.fsize} className={props.active? 'active': ''}>
            {props.name}
        </NavbarLink>
    )
}

export default Navbarlk;