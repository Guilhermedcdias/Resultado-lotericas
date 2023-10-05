export default interface IDuplaSena {
    dezenasSegundoSorteio: string[];
    quantidadeGanhadoresSegundoSorteio: number;
    totalGanhadores: number;
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoPublicacao: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
}