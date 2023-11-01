import Card from "./elements/card";
import CirculoComponent from "./elements/circulo";
import Container from "./elements/container";
import NumberGrid from "./elements/linhaNumero";
import Texto from "./elements/text";
import TextWithImage from "./textWithImage";


interface JogoProps {
    titulo?: string;
    corTitulo?: string;
    imagem?: string;
    descricao?: string;
    valor?: string;
    tipoJogo?: string;
    numeros?: string[];
    descricaoGanhadoresSorteio?: string;
    numeroConcurso?: string;
    dataConcurso?: string;
}

function Jogo(props: JogoProps) {
    return (
        <Container width={"80%"} height={"50vh"} mt="3rem">
            <Card width="50%" height="100%">
                <TextWithImage imagem={props.imagem} color={props.corTitulo} text={props.titulo}></TextWithImage>
                <Container width={"100%"} height={"auto"}>
                    <Texto size="1rem" color="#4c556c" ml="5.5rem" mt="1.5rem">{props.descricao}</Texto>
                </Container>
                <Container width={"100%"} height={"auto"}>
                    <Texto size="1.8rem" color={props.corTitulo} ml="5.5rem" mt="1.5rem">{props.valor}</Texto>
                </Container>
            </Card>
            <Card width="50%" height="100%">
                {props.tipoJogo === "megasena" ? (

                    <Container width={"100%"} height={"auto"}>
                        {
                            props.numeros?.map((numero, index) => {
                                return (
                                    <CirculoComponent key={index} color={props.corTitulo} width="3rem" height="3rem" mr="1rem">
                                        <Texto size="1.8rem" color="#ffffff">{numero}</Texto>
                                    </CirculoComponent>
                                );
                            })
                        }
                    </Container>
                ) : props.tipoJogo == 'lotofacil' ? (
                    // Retorne o JSX ou componente para outros casos
                    <Container width={"100%"} height={"auto"}>
                        <NumberGrid numbers={props.numeros ?? []} />
                    </Container>
                ) : ""}

                <Container width={"100%"} height={'auto'}>
                    <Texto size="1.8rem" color="#0066b3" ml="0" mt="1.5rem">{props.descricaoGanhadoresSorteio == '0' ? "ACUMULOU" : `${props.descricaoGanhadoresSorteio} GANHADORES`}</Texto>
                </Container>
                <Container width={"100%"} height={'auto'}>
                    <Texto size="1rem" color="#4c556c" ml="0" mt="1.5rem">Concurso {props.numeroConcurso} - {props.dataConcurso}</Texto>
                </Container>
            </Card>
        </Container>
    );
}

export default Jogo;