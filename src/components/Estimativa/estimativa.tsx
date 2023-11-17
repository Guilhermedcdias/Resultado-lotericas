import Container from "../elements/container";
import Texto from "../elements/text";

interface EstimativaProps {
    corTitulo?: string;
    descricao?: string;
    valor?: string;
}

function Estimativa(props: EstimativaProps) {
    return (
        <>
            <Container width={"100%"} height={"auto"}>
                <Texto size="1rem" color="#4c556c" ml="5.5rem" mt="1.5rem">{props.descricao}</Texto>
            </Container>
            <Container width={"100%"} height={"auto"}>
                <Texto size="1.8rem" color={props.corTitulo} ml="5.5rem" mt="1.5rem">{props.valor}</Texto>
            </Container>
        </>
    );
}

export default Estimativa;