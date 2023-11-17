import Jogo from "../components/jogos";
import React from 'react';
import useLottery from "../hooks/useLotery";
import Texto from "../components/elements/text";
import Container from "../components/elements/container";
import Card from "../components/elements/card";
import HrComponent from "../components/elements/hr";
import Loading from "../components/Carregando/loading";

function Quina() {
    const { data, loading } = useLottery();

    console.log(data);

    const opcoesDeFormatacao = {
        style: 'currency',
        currency: 'BRL'
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <Card height="100vh" width="100%">
            <Jogo titulo={data?.quina.tipoJogo.replace("_", " ")} corTitulo="#260085" imagem="/assets/trevo-quina.png" valor={`${data?.quina.valorEstimadoProximoConcurso.toLocaleString("pt-BR", opcoesDeFormatacao)}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.quina.dataProximoConcurso}`} tipoJogo="megasena" numeros={data?.quina.dezenas} descricaoGanhadoresSorteio={String(data?.quina.quantidadeGanhadores)} numeroConcurso={String(data?.quina.numeroDoConcurso)} dataConcurso={data?.quina.dataPorExtenso} />
            <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem" />
        </Card>
    );
}

export default Quina;