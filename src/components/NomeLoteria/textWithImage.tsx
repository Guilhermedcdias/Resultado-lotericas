import Container from "../elements/container";
import Image from "../elements/image";
import Texto from "../elements/text";

interface TextWithImageProps {
    color?: string;
    imagem?: string;
    text?: string;
}

function TextWithImage(props:TextWithImageProps) {
    return (
        <Container width={"100%"} height={"auto"}>
            <Image src={props.imagem} width={"60px"} height={"auto"} />
            <Texto color={props.color} ml="1.5rem" size="3rem">{props.text}</Texto>
        </Container>
    );
}

export default TextWithImage;

