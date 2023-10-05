import Jogo from "../components/jogos";
import React from 'react';
import useLottery from "../hooks/useLotery";
import Texto from "../components/elements/text";
import Container from "../components/elements/container";
import Card from "../components/elements/card";

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
            <Jogo titulo={data?.lotofacil.tipoJogo} corTitulo="#930089" imagem="/assets/trevo-lotofacil.png" valor={`R$ ${data?.lotofacil.valorEstimadoProximoConcurso}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.lotofacil.dataProximoConcurso}`} />
            <Jogo titulo={data?.megasena.tipoJogo} corTitulo="#209869" imagem="/assets/trevo-megasena.png" valor={`R$ ${data?.megasena.valorEstimadoProximoConcurso}`} descricao={`Estimativa de premio do próximo concurso. Sorteio em ${data?.megasena.dataProximoConcurso}`} />
        </Card>
    );
}

export default HomePage;