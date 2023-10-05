import Card from "./elements/card";
import Container from "./elements/container";
import Texto from "./elements/text";
import TextWithImage from "./textWithImage";


interface JogoProps {
    titulo?: string;
    corTitulo?: string;
    imagem?: string;
    descricao?: string;
    valor?: string;
}

function Jogo(props:JogoProps) {
    return (
        <Container width={"80%"} height={"50vh"} mt="3rem">
            <Card width="50%" height="100%">
                <TextWithImage imagem={props.imagem} color={props.corTitulo} text={props.titulo}></TextWithImage>
                <Container width={"100%"} height={"auto"}>
                    <Texto size="1rem" color="#4c556c" ml="5.5rem" mt="1.5rem">{props.descricao}</Texto>
                </Container>
                <Container width={"100%"} height={"auto"}>
                    <Texto size="1.8rem" color={props.corTitulo} ml="5.5rem" mt="1.5rem">{props.valor   }</Texto>
                </Container>
            </Card>
            <Card width="50%" height="100%">
                bbb
            </Card>
        </Container>
    );
}

export default Jogo;