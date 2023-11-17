import Acumulou from "./Acumulou/acumulou";
import Card from "./elements/card";
import CirculoComponent from "./elements/circulo";
import Container from "./elements/container";
import Data from "./Data/data";
import NumberGrid from "./elements/linhaNumero";
import Texto from "./elements/text";
import TextWithImage from "./NomeLoteria/textWithImage";
import Resultado from "./Resultado/resultado";
import Esquerda from "./Esquerda/esquerda";
import Direita from "./Direita/direita";
import Estimativa from "./Estimativa/estimativa";


interface JogoProps {
    titulo?: string;
    corTitulo?: string;
    imagem?: string;
    descricao?: string;
    valor?: string;
    numeros?: string[];
    descricaoGanhadoresSorteio?: string;
    numeroConcurso?: string;
    dataConcurso?: string;
}

function Jogo(props: JogoProps) {
    return (
        <Container width={"80%"} height={"50vh"} mt="3rem">
            <Esquerda>
                <TextWithImage imagem={props.imagem} color={props.corTitulo} text={props.titulo}></TextWithImage>
                <Estimativa corTitulo={props.corTitulo} descricao={props.descricao} valor={props.valor} />
            </Esquerda>
            <Direita>
                <Resultado corTitulo={props.corTitulo} numeros={props.numeros} />
                <Acumulou descricaoGanhadoresSorteio={props.descricaoGanhadoresSorteio} />
                <Data numeroConcurso={props.numeroConcurso} dataConcurso={props.dataConcurso} />
            </Direita>
        </Container>
    );
}

export default Jogo;