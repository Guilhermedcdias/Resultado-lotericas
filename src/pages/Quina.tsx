import React from 'react';
import useLottery from "../hooks/useLotery";
import Container from "../components/elements/container";
import Principal from "../components/Principal/principal";
import Esquerda from "../components/Esquerda/esquerda";
import TextWithImage from "../components/NomeLoteria/textWithImage";
import Estimativa from "../components/Estimativa/estimativa";
import Direita from "../components/Direita/direita";
import Resultado from "../components/Resultado/resultado";
import Acumulou from "../components/Acumulou/acumulou";
import Data from "../components/Data/data";
import { useTheme } from 'styled-components';

function Quina() {
    const theme = useTheme();
    const { data } = useLottery();

    const opcoesDeFormatacao = {
        style: 'currency',
        currency: 'BRL'
    };

    return (
        <Principal>
            <Container width={"80%"} height={"50vh"} mt="3rem">
                <Esquerda>
                    <TextWithImage imagem={'/assets/trevo-quina.png'} color={theme.loteria} text={data?.quina.tipoJogo.replace("_", " ")}></TextWithImage>
                    <Estimativa corTitulo={theme.estimativa} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.quina.dataProximoConcurso}`} valor={`${data?.quina.valorEstimadoProximoConcurso.toLocaleString("pt-BR", opcoesDeFormatacao)}`} />
                </Esquerda>
                <Direita>
                    <Resultado corTitulo={theme.bola} fonte={theme.bolafonte} numeros={data?.quina.dezenas} />
                    <Acumulou descricaoGanhadoresSorteio={String(data?.quina.quantidadeGanhadores)} cor={theme.acumulou}/>
                    <Data numeroConcurso={String(data?.quina.numeroDoConcurso)} dataConcurso={data?.quina.dataPorExtenso} cor={theme.data} />
                </Direita>
            </Container>
        </Principal>
    );
}

export default Quina;