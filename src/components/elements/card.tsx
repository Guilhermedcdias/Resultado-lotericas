import styled from "styled-components";

interface CardProps {
    children: React.ReactNode;
    align?: string;
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    width?: string;
    height?: string;
}

const Div = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align?? "center"};
    width: ${props => props.width?? "50%"};
    max-width: 1200px;
    padding: 0 1rem;
    margin-right: ${props => props.mr?? "0"};
    margin-left: ${props => props.ml?? "0"};
    margin-top: ${props => props.mt?? "0"};
    margin-bottom: ${props => props.mb?? "0"};
    height: ${props => props.height?? "100%"};
`;

function Card(props:CardProps) {
    return (
        <Div align={props.align} mt={props.mt} mb={props.mb} ml={props.ml} mr={props.mr} width={props.width} height={props.height}>
            {props.children}
        </Div>
    );
}

export default Card;