import Jogo from "../components/jogos";
import React from 'react';
import useLottery from "../hooks/useLotery";
import Texto from "../components/elements/text";
import Container from "../components/elements/container";
import Card from "../components/elements/card";
import HrComponent from "../components/elements/hr";

function HomePage() {
    const { data, loading } = useLottery();

    console.log(data);

    if (loading) {
        return (
            <Texto size="1.8rem" color="#000000" ml="5.5rem" mt="1.5rem">Carregando...</Texto>
        );
    }

    return (
        <Card height="100vh" width="100%">
            <Jogo titulo={data?.megasena.tipoJogo} corTitulo="#209869" imagem="/assets/trevo-megasena.png" valor={`R$ ${data?.megasena.valorEstimadoProximoConcurso}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.megasena.dataProximoConcurso}`} />
            <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem" />
            <Jogo titulo={data?.lotofacil.tipoJogo} corTitulo="#930089" imagem="/assets/trevo-lotofacil.png" valor={`R$ ${data?.lotofacil.valorEstimadoProximoConcurso}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.lotofacil.dataProximoConcurso}`} />
            <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem"/>
        </Card>
    );
}

export default HomePage;