import IPremio from "./IPremio";

export default interface IFederal {
    localSorteio: string;
    nomeMunicipioUFSorteio: string;
    premios: IPremio[];
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
