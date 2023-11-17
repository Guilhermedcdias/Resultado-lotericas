import Jogo from "../components/jogos";
import React from 'react';
import useLottery from "../hooks/useLotery";
import Texto from "../components/elements/text";
import Card from "../components/elements/card";
import HrComponent from "../components/elements/hr";

function TimeMania() {
    const { data, loading } = useLottery();

    console.log(data);

    const opcoesDeFormatacao = {
        style: 'currency',
        currency: 'BRL'
    };

    if (loading) {
        return (
            <Texto size="1.8rem" color="#000000" ml="5.5rem" mt="1.5rem">Carregando...</Texto>
        );
    }

    return (
        <Card height="100vh" width="100%">
            <Jogo titulo={data?.timemania.tipoJogo.replace("_", " ")} corTitulo="#209869" imagem="/assets/trevo-timemania.png" valor={`${data?.timemania.valorEstimadoProximoConcurso.toLocaleString("pt-BR", opcoesDeFormatacao)}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.timemania.dataProximoConcurso}`} tipoJogo="megasena" numeros={data?.timemania.dezenas} descricaoGanhadoresSorteio={String(data?.timemania.quantidadeGanhadores)} numeroConcurso={String(data?.timemania.numeroDoConcurso)} dataConcurso={data?.timemania.dataPorExtenso} />
            <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem" />
        </Card>
    );
}

export default TimeMania;