import React from 'react';
import useLottery from "../hooks/useLotery";
import Principal from "../components/Principal/principal";
import Container from "../components/elements/container";
import Esquerda from "../components/Esquerda/esquerda";
import TextWithImage from "../components/NomeLoteria/textWithImage";
import Estimativa from "../components/Estimativa/estimativa";
import Direita from "../components/Direita/direita";
import Resultado from "../components/Resultado/resultado";
import Acumulou from "../components/Acumulou/acumulou";
import Data from "../components/Data/data";
import { useTheme } from 'styled-components';


function MegaSena() {
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
                    <TextWithImage imagem={'/assets/trevo-megasena.png'} color={theme.loteria} text={data?.megasena.tipoJogo.replace("_", " ")}></TextWithImage>
                    <Estimativa corTitulo={theme.estimativa} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.megasena.dataProximoConcurso}`} valor={`${data?.timemania.valorEstimadoProximoConcurso.toLocaleString("pt-BR", opcoesDeFormatacao)}`} />
                </Esquerda>
                <Direita>
                    <Resultado corTitulo={theme.bola} fonte={theme.bolafonte} numeros={data?.megasena.dezenas} />
                    <Acumulou descricaoGanhadoresSorteio={String(data?.megasena.quantidadeGanhadores)} cor={theme.acumulou} />
                    <Data numeroConcurso={String(data?.megasena.numeroDoConcurso)} dataConcurso={data?.megasena.dataPorExtenso} cor={theme.data}/>
                </Direita>
            </Container>
        </Principal>
    );
}

export default MegaSena;