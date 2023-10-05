import styled from "styled-components";

interface HrProps {
    width?: string;
    height?: string;
    color?: string;
    mt?: string;
    mb?: string;
    radios?: string;
}

const Hr = styled.hr<HrProps>`
    width: ${props => props.width?? "100%"};
    height: ${props => props.height?? "1px"};
    background-color: ${props => props.color?? "#000000"};
    margin-top: ${props => props.mt?? "0"};
    margin-bottom: ${props => props.mb?? "0"};
    border-radius: ${props => props.radios?? "0"};
`;

function HrComponent(props:HrProps) {
    return (
        <Hr width={props.width} height={props.height} color={props.color} mt={props.mt} mb={props.mb} radios={props.radios}/>
    );
}

export default HrComponent;