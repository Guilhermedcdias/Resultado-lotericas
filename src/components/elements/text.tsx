import styled from "styled-components";

interface TextProps {
    size?: string;
    color?: string;
    align?: string;
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    text?: string;
    fontFamily?: string;
    children?: React.ReactNode;
}

const P = styled.p<TextProps>`
    font-size: ${props => props.size?? "1.5rem"};
    color: ${props => props.color?? "#000000"};
    text-align: ${props => props.align?? "left"};
    margin-top: ${props => props.mt?? "0"};
    margin-bottom: ${props => props.mb?? "0"};
    margin-right: ${props => props.mr?? "0"};
    margin-left: ${props => props.ml?? "0"};
    font-family: ${props => props.fontFamily?? "Roboto"};
`;

function Texto(props:TextProps) {
    return (
        <P size={props.size} color={props.color} align={props.align} mt={props.mt} mb={props.mb} mr={props.mr} ml={props.ml}>
            {props.text?? props.children}
        </P>
    );
}

export default Texto;