import Card from "../elements/card";
import CirculoComponent from "../elements/circulo";
import Container from "../elements/container";
import Texto from "../elements/text";

interface ResultadoProps {
    corTitulo?: string;
    numeros?: string[];
    fonte?: string;
}

function Resultado(props: ResultadoProps) {
    return (
        <Container width={"100%"} height={"auto"}>
            {
                props.numeros?.map((numero, index) => {
                    return (
                        <CirculoComponent key={index} color={props.corTitulo} width="3rem" height="3rem" mr="1rem">
                            <Texto size="1.8rem" color={props.fonte}>{numero}</Texto>
                        </CirculoComponent>
                    );
                })
            }
        </Container>
    );
}

export default Resultado;