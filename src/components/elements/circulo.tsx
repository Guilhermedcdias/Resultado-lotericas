import styled from "styled-components";

interface CirculoProps {
    width?: string;
    height?: string;
    color?: string;
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    children?: React.ReactNode;
}

const Circulo = styled.div<CirculoProps>`
    width: ${props => props.width?? "3rem"};
    height: ${props => props.height?? "3rem"};
    margin-top: ${props => props.mt?? "0rem"};
    margin-bottom: ${props => props.mb?? "0rem"};
    margin-right: ${props => props.mr?? "0rem"};
    margin-left: ${props => props.ml?? "0rem"};
    border-radius: 50%;
    background-color: ${props => props.color?? "#000000"};
    display: flex;
    justify-content: center;
    align-items: center;
`;

function CirculoComponent(props: CirculoProps) {
    return (
        <Circulo>
            {props.children}
        </Circulo>
    );
}


export default CirculoComponent;