import Container from "../elements/container";
import Texto from "../elements/text";

interface DataProps {
    numeroConcurso?: string;
    dataConcurso?: string;
    cor?: string;
}

function Data(props: DataProps) {
    return (
        <Container width={"100%"} height={'auto'}>
            <Texto size="1rem" color={props.cor} ml="0" mt="1.5rem">Concurso {props.numeroConcurso} - {props.dataConcurso}</Texto>
        </Container>
    );
}

export default Data;