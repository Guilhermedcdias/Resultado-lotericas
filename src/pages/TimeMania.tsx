import Jogo from "../components/jogos";
import React from 'react';
import useLottery from "../hooks/useLotery";
import Principal from "../components/Principal/principal";

function TimeMania() {
    const { data } = useLottery();

    const opcoesDeFormatacao = {
        style: 'currency',
        currency: 'BRL'
    };

    return (
        <Principal>
            <Jogo
                titulo={data?.timemania.tipoJogo.replace("_", " ")}
                corTitulo="#209869" imagem="/assets/trevo-timemania.png"
                valor={`${data?.timemania.valorEstimadoProximoConcurso.toLocaleString("pt-BR", opcoesDeFormatacao)}`}
                descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.timemania.dataProximoConcurso}`}
                numeros={data?.timemania.dezenas}
                descricaoGanhadoresSorteio={String(data?.timemania.quantidadeGanhadores)}
                numeroConcurso={String(data?.timemania.numeroDoConcurso)}
                dataConcurso={data?.timemania.dataPorExtenso} />
        </Principal>
    );
}

export default TimeMania;