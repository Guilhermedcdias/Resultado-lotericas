import Container from "../elements/container";
import Texto from "../elements/text";

interface AcumulouProps {
    descricaoGanhadoresSorteio?: string;
    cor?: string;
}

function Acumulou(props: AcumulouProps) {
    return (
        <Container width={"100%"} height={'auto'}>
            <Texto size="1.8rem" color={props.cor} ml="0" mt="1.5rem">{props.descricaoGanhadoresSorteio == '0' ? "ACUMULOU" : `${props.descricaoGanhadoresSorteio} GANHADORES`}</Texto>
        </Container>
    );
}

export default Acumulou;