import styled from "styled-components";

interface ContainerProps {
    children: React.ReactNode;
    align?: string;
    mt?: string;
    mb?: string;
    mr?: string;
    ml?: string;
    width?: string;
    height?: string;
}

const Div = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: ${props => props.align?? "center"};
    width: ${props => props.width?? "100%"};
    margin-top: ${props => props.mt?? "0"};
    margin-bottom: ${props => props.mb?? "0"};
    height: ${props => props.height?? "100vh"};
`;

function Container( props: ContainerProps) {
    return (
        <Div align={props.align} mt={props.mt} mb={props.mb} ml={props.ml} mr={props.mr} width={props.width} height={props.height}>
            {props.children}
        </Div>
    );
}

export default Container;