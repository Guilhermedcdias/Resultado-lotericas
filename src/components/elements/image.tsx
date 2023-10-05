import styled from "styled-components";

interface ImagemProps {
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
    fit?: string;
    bradius?: string;
}

const Imagem = styled.img<ImagemProps>`
    width: ${props => props.width?? "100%"};
    height: ${props => props.height?? "100%"};
    object-fit: ${props => props.fit?? "cover"};
    border-radius: ${props => props.bradius?? "0"};
`;

function Image(props:ImagemProps) {
    return (
        <Imagem src={props.src} alt={props.alt} width={props.width} height={props.height} fit={props.fit} bradius={props.bradius}/>
    );
}

export default Image;