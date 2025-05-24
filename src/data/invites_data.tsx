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
//import formatoDiferente6 from "../assets/questions/formato-diferente6.jpg";
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
import simples5 from "../assets/questions/simples5.jpg";

import abrirJanela from "../assets/questions/material/abrir-janela.jpg";
import arco from "../assets/questions/material/arco.jpg";
import fioFlor from "../assets/questions/material/fio-flor.jpg";
import fioLacreFlor from "../assets/questions/material/fio-lacre-flor.jpg";
import lacre from "../assets/questions/material/lacre.jpg";
import oval from "../assets/questions/material/oval.jpg";
import papelRasgado from "../assets/questions/material/papel-rasgado.jpg";
import papelTranslucido from "../assets/questions/material/papel-translucido.jpg";
import passport from "../assets/questions/material/passport.jpg";
import presoTopo from "../assets/questions/material/preso-topo.jpg";
import puxarTopo from "../assets/questions/material/puxar-topo.jpg";
import recorte from "../assets/questions/material/recorte.jpg";
import relevo from "../assets/questions/material/relevo.jpg";
import semiArco from "../assets/questions/material/semi-arco.jpg";
import simples from "../assets/questions/material/simples.jpg";
import tecidoFlor from "../assets/questions/material/tecido-flor.jpg";

import { Q1to5, QAvsB, QGNNG } from "../types";

const RQ1: Q1to5 = {
  format: "1to5",
  options: [
    { imageUrl: tecidoFlor, text: "Faixa de tecido" },
    { imageUrl: fioFlor, text: "Fio serapilheira" },
    { imageUrl: fioLacreFlor, text: "Detalhe flor seca" },
    { imageUrl: lacre, text: "Lacre de cêra" },
  ],
};
const RQ2: Q1to5 = {
  format: "1to5",
  options: [
    { imageUrl: oval, text: "Formato oval" },
    { imageUrl: semiArco, text: "Corte semi Arco" },
    { imageUrl: arco, text: "Formato arco" },
    { imageUrl: simples, text: "Tradicional retangular" },
  ],
};
const RQ3: Q1to5 = {
  format: "1to5",
  options: [
    { imageUrl: recorte, text: "Recorte complexo" },
    { imageUrl: relevo, text: "Detalhes em relevo" },
    { imageUrl: papelTranslucido, text: "Papel translúcido" },
    { imageUrl: papelRasgado, text: "Papel rasgado" },
  ],
};
const RQ4: Q1to5 = {
  format: "1to5",
  options: [
    { imageUrl: passport, text: "Estilo passaporte" },
    { imageUrl: presoTopo, text: "Preso no topo com camadas" },
    { imageUrl: puxarTopo, text: "Puxar do envelope" },
    { imageUrl: abrirJanela, text: "Abrir como uma janela" },
  ],
};

const ABQ1: QAvsB = {
  format: "AvsB",
  image1: { url: simplesLacreFio, value: "Option A" },
  image2: { url: dinamico2, value: "Option B" },
};
const ABQ2: QAvsB = {
  format: "AvsB",
  image1: { url: simples3, value: "Option A" },
  image2: { url: classico1, value: "Option B" },
};
const ABQ3: QAvsB = {
  format: "AvsB",
  image1: { url: formatoDiferente4, value: "Option A" },
  image2: { url: formatoDiferente5, value: "Option B" },
};
const ABQ4: QAvsB = {
  format: "AvsB",
  image1: { url: lacreTransparente1, value: "Option A" },
  image2: { url: formatoDiferente1, value: "Option B" },
};
const ABQ5: QAvsB = {
  format: "AvsB",
  image1: { url: simples5, value: "Option A" },
  image2: { url: classicoRelevoArco, value: "Option B" },
};
const ABQ6: QAvsB = {
  format: "AvsB",
  image1: { url: formatoDiferente3, value: "Option A" },
  image2: { url: romanticoLacreFitaClaro, value: "Option B" },
};
const ABQ7: QAvsB = {
  format: "AvsB",
  image1: { url: formatoDiferente2, value: "Option A" },
  image2: { url: relevo1, value: "Option B" },
};
const ABQ8: QAvsB = {
  format: "AvsB",
  image1: { url: simples1, value: "Option A" },
  image2: { url: dinamico1, value: "Option B" },
};
const ABQ9: QAvsB = {
  format: "AvsB",
  image1: { url: lacreEnvelopeEscuro, value: "Option A" },
  image2: { url: lacreTrsnaparenteFlor, value: "Option B" },
};
const ABQ10: QAvsB = {
  format: "AvsB",
  image1: { url: simples5, value: "Option A" },
  image2: { url: recorte1, value: "Option B" },
};
const ABQ11: QAvsB = {
  format: "AvsB",
  image1: { url: passport2, value: "Option A" },
  image2: { url: bilhete1, value: "Option B" },
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
    { text: "Convite dinâmico" },
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
    { text: "Envelope escrito" },
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
    { text: "Frase inspiracional" },
  ],
};
const GNNGQ9: QGNNG = {
  format: "GNNG",
  imageUrl: formatoDiferente5,
  field: [
    { text: "Formato semi arco" },
    { text: "Múltiplos elementos" },
    { text: "Lacre" },
    { text: "Apontamento de tecido" },
  ],
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
    { text: "Faixa de papel translucido" },
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
  ],
};
const GNNGQ15: QGNNG = {
  format: "GNNG",
  imageUrl: passport2,
  field: [
    { text: "Temática viagens" },
    { text: "Formato passport" },
    { text: "Apontamento de tecido" },
    { text: "Cores suaves" }, // talvez tirar
  ],
};

const GNNGQ16: QGNNG = {
  format: "GNNG",
  imageUrl: recorte1,
  field: [
    { text: "Formato janela" },
    { text: "Recorte decorativo" },
    { text: "Emblesa iniciais" },
  ],
};
const GNNGQ17: QGNNG = {
  format: "GNNG",
  imageUrl: relevo1,
  field: [{ text: "Envelope de puxar" }, { text: "Relevo" }, { text: "Letra" }],
};
const GNNGQ18: QGNNG = {
  format: "GNNG",
  imageUrl: romanticoLacreFitaClaro,
  field: [
    { text: "Lacre com tecido" },
    { text: "Papel irregular" },
    { text: "Letra" },
  ],
};
const GNNGQ19: QGNNG = {
  format: "GNNG",
  imageUrl: simplesLacreFio,
  field: [
    { text: "Formato simples" },
    { text: "Lacre com fio" },
    { text: "Letra" },
  ],
};
const GNNGQ20: QGNNG = {
  format: "GNNG",
  imageUrl: dinamico1,
  field: [
    { text: "Convite dinâmico" },
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
  ABQ1,
  ABQ2,
  ABQ3,
  ABQ4,
  ABQ5,
  ABQ6,
  ABQ7,
  ABQ8,
  ABQ9,
  ABQ10,
  ABQ11,
  GNNGQ1,
  GNNGQ2,
  GNNGQ3,
  GNNGQ4,
  GNNGQ5,
  GNNGQ6,
  GNNGQ7,
  GNNGQ8,
  GNNGQ9,
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
  RQ1,
  RQ2,
  RQ3,
  RQ4,
];
