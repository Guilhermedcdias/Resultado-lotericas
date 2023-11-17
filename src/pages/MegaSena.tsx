import Jogo from "../components/jogos";
import React from 'react';
import useLottery from "../hooks/useLotery";
import Texto from "../components/elements/text";
import Card from "../components/elements/card";
import HrComponent from "../components/elements/hr";
import Loading from "../components/Carregando/loading";

function MegaSena() {
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
            <Jogo titulo={data?.megasena.tipoJogo.replace("_", " ")} corTitulo="#209869" imagem="/assets/trevo-megasena.png" valor={`${data?.megasena.valorEstimadoProximoConcurso.toLocaleString("pt-BR", opcoesDeFormatacao)}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.megasena.dataProximoConcurso}`} tipoJogo="megasena" numeros={data?.megasena.dezenas} descricaoGanhadoresSorteio={String(data?.megasena.quantidadeGanhadores)} numeroConcurso={String(data?.megasena.numeroDoConcurso)} dataConcurso={data?.megasena.dataPorExtenso} />
            <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem" />
        </Card>
    );
}

export default MegaSena;