import bilhete1 from "../assets/questions/bilhete1.jpg";
//import bilhete2 from "../assets/questions/bilhete2.jpg";
import classicoRelevoArco from "../assets/questions/classico-relevo-arco.jpg";
import classico1 from "../assets/questions/classico1.jpg";
import dinamico1 from "../assets/questions/dinamico1.jpg";
import dinamico2 from "../assets/questions/dinamico2.jpg";
//import envelopeLogo from "../assets/questions/envelope-logo.jpg";
import formatoDiferente1 from "../assets/questions/formato-diferente1.jpg";
import formatoDiferente2 from "../assets/questions/formato-diferente2.jpg";
import formatoDiferente3 from "../assets/questions/formato-diferente3.jpg";
import formatoDiferente4 from "../assets/questions/formato-diferente4.jpg";
import formatoDiferente5 from "../assets/questions/formato-diferente5.jpg";
import formatoDiferente6 from "../assets/questions/formato-diferente6.jpg";
//import formatoDiferente7 from "../assets/questions/formato-diferente7.jpg";
import lacreEnvelopeEscuro from "../assets/questions/lacre-envelope-escuro.jpg";
import lacreTrsnaparenteFlor from "../assets/questions/lacre-transparente-flor.jpg";
import lacreTransparente1 from "../assets/questions/lacre-transparente1.jpg";
import passport1 from "../assets/questions/passport1.jpg";
import passport2 from "../assets/questions/passport2.jpg";
import recorte1 from "../assets/questions/recorte1.jpg";
import relevo1 from "../assets/questions/relevo1.jpg";
//import romanticoEscuro from "../assets/questions/romantico-escuro.jpg";
import romanticoLacreFitaClaro from "../assets/questions/romantico-lacre-fita-claro.jpg";
import simplesLacreFio from "../assets/questions/simples-lacre-fio.jpg";
import simples1 from "../assets/questions/simples1.jpg";
//import simples2 from "../assets/questions/simples2.jpg";
import simples3 from "../assets/questions/simples3.jpg";
//import simples4 from "../assets/questions/simples4.jpg";
//import simples5 from "../assets/questions/simples5.jpg";

import { QAvsB, QGNNG } from "../types";

const Q1: QAvsB = {
  format: "AvsB",
  image1: { url: classico1, value: "Option A" },
  image2: { url: dinamico2, value: "Option B" },
};
const Q2: QAvsB = {
  format: "AvsB",
  image1: { url: bilhete1, value: "Option A" },
  image2: { url: dinamico2, value: "Option B" },
};

const GNNGQ1: QGNNG = {
  format: "GNNG",
  imageUrl: bilhete1,
  field: [
    { text: "Letra" },
    { text: "Formato Bilhete" },
    { text: "Temática Viagens" },
    { text: "Com fotos" },
  ],
};
const GNNGQ2: QGNNG = {
  format: "GNNG",
  imageUrl: classicoRelevoArco,
  field: [
    { text: "Letra" },
    { text: "Formato em arco" },
    { text: "Detalhes de relevo" },
  ],
};
const GNNGQ3: QGNNG = {
  format: "GNNG",
  imageUrl: classico1,
  field: [
    { text: "Letra" },
    { text: "Design clássico" },
    { text: "Data em destaque" },
    { text: "Formato simples" },
  ],
};
const GNNGQ4: QGNNG = {
  format: "GNNG",
  imageUrl: dinamico2,
  field: [
    { text: "Letra" },
    { text: "Com interação" },
    { text: "Papel translúcido" },
    { text: "Foto em destaque" },
  ],
};
const GNNGQ5: QGNNG = {
  format: "GNNG",
  imageUrl: formatoDiferente1,
  field: [
    { text: "Formato em camadas" },
    { text: "Lacre com fio" },
    { text: "Com envelope" },
    { text: "Papel rasgado" },
  ],
};
const GNNGQ6: QGNNG = {
  format: "GNNG",
  imageUrl: formatoDiferente2,
  field: [
    { text: "Formato oval" },
    { text: "Lacre com planta" },
    { text: "Com envelope" },
  ],
};
const GNNGQ7: QGNNG = {
  format: "GNNG",
  imageUrl: formatoDiferente3,
  field: [
    { text: "Formato do envelope" },
    { text: "Data em destaque" },
    { text: "Fio a fechar" },
  ],
};
const GNNGQ8: QGNNG = {
  format: "GNNG",
  imageUrl: formatoDiferente4,
  field: [
    { text: "Formato janela" },
    { text: "Foto em destaque" },
    { text: "Faixa" },
  ],
};
const GNNGQ9: QGNNG = {
  format: "GNNG",
  imageUrl: formatoDiferente5,
  field: [
    { text: "Formato semi arco" },
    { text: "Múltiplos elementos" },
    { text: "Lacre" },
    { text: "Faixa" },
  ],
};
const GNNGQ10: QGNNG = {
  format: "GNNG",
  imageUrl: formatoDiferente6,
  field: [{ text: "Formato tudo em 1" }, { text: "Elementos florais" }],
};
const GNNGQ11: QGNNG = {
  format: "GNNG",
  imageUrl: lacreEnvelopeEscuro,
  field: [
    { text: "Envelope" },
    { text: "Cores escuras" },
    { text: "Lacre com logo" },
    { text: "Fita" },
  ],
};
const GNNGQ12: QGNNG = {
  format: "GNNG",
  imageUrl: lacreTrsnaparenteFlor,
  field: [
    { text: "Lacre com flor" },
    { text: "Papel translucido em parte" },
    { text: "Sem envelope" },
    { text: "Papel irregular" },
  ],
};
const GNNGQ13: QGNNG = {
  format: "GNNG",
  imageUrl: lacreTransparente1,
  field: [
    { text: "Lacre com logo" },
    { text: "Papel translucido em total" },
    { text: "Elementos florais" },
    { text: "Com envelope" },
  ],
};
const GNNGQ14: QGNNG = {
  format: "GNNG",
  imageUrl: passport1,
  field: [
    { text: "Temática viagens" },
    { text: "Formato passport" },
    { text: "Elemento decoratico" },
    { text: "Cores vivas" },
  ],
};
const GNNGQ15: QGNNG = {
  format: "GNNG",
  imageUrl: passport2,
  field: [
    { text: "Temática viagens" },
    { text: "Formato passport" },
    { text: "Fita" },
    { text: "Cores suaves" },
  ],
};
const GNNGQ16: QGNNG = {
  format: "GNNG",
  imageUrl: recorte1,
  field: [
    { text: "Formato janela" },
    { text: "Recorte decorativo" },
    { text: "Logo casal" },
  ],
};
const GNNGQ17: QGNNG = {
  format: "GNNG",
  imageUrl: relevo1,
  field: [
    { text: "CEnvelope de puxar" },
    { text: "Relevo" },
    { text: "Letra" },
  ],
};
const GNNGQ18: QGNNG = {
  format: "GNNG",
  imageUrl: romanticoLacreFitaClaro,
  field: [
    { text: "Lacre com fita" },
    { text: "Multiplos elemetos" },
    { text: "Papel irregular" },
    { text: "Letra" },
  ],
};
const GNNGQ19: QGNNG = {
  format: "GNNG",
  imageUrl: simplesLacreFio,
  field: [
    { text: "Formato simples" },
    { text: "Papel translucido" },
    { text: "Lacre com fio" },
    { text: "Letra" },
  ],
};
const GNNGQ20: QGNNG = {
  format: "GNNG",
  imageUrl: dinamico1,
  field: [
    { text: "Com interação" },
    { text: "Tassel" },
    { text: "Fotos em destaque" },
    { text: "Formato" },
  ],
};
const GNNGQ21: QGNNG = {
  format: "GNNG",
  imageUrl: simples1,
  field: [{ text: "Formato postal" }, { text: "Fotos em destaque" }],
};
const GNNGQ22: QGNNG = {
  format: "GNNG",
  imageUrl: simples3,
  field: [{ text: "Formato simples" }, { text: "Fotos em destaque" }],
};

export const quizConvites = [
  GNNGQ1,
  GNNGQ2,
  GNNGQ3,
  GNNGQ4,
  GNNGQ5,
  GNNGQ6,
  GNNGQ7,
  GNNGQ8,
  GNNGQ9,
  GNNGQ10,
  GNNGQ11,
  GNNGQ12,
  GNNGQ13,
  GNNGQ14,
  GNNGQ15,
  GNNGQ16,
  GNNGQ17,
  GNNGQ18,
  GNNGQ19,
  GNNGQ20,
  GNNGQ21,
  GNNGQ22,
];
