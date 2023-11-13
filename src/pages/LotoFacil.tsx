import Jogo from "../components/jogos";
import React from 'react';
import useLottery from "../hooks/useLotery";
import Texto from "../components/elements/text";
import Container from "../components/elements/container";
import Card from "../components/elements/card";
import HrComponent from "../components/elements/hr";

function LotoFacil() {
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
            <Jogo titulo={data?.lotofacil.tipoJogo} corTitulo="#930089" imagem="/assets/trevo-lotofacil.png" valor={`${data?.lotofacil.valorEstimadoProximoConcurso.toLocaleString("pt-BR", opcoesDeFormatacao)}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.lotofacil.dataProximoConcurso}`} tipoJogo="lotofacil" numeros={data?.lotofacil.dezenas} descricaoGanhadoresSorteio={String(data?.lotofacil.quantidadeGanhadores)} numeroConcurso={String(data?.lotofacil.numeroDoConcurso)} dataConcurso={data?.lotofacil.dataPorExtenso} />
            <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem" />
        </Card>
    );
}

export default LotoFacil;