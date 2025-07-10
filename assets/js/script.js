const headerE = document.getElementById("header");
const headerL1E = document.getElementById("headerL1");
const headerL2E = document.getElementById("headerL2");
const headerL3E = document.getElementById("headerL3");
const headerR1E = document.getElementById("headerR1");
const headerR2E = document.getElementById("headerR2");
const headerR3E = document.getElementById("headerR3");
const headerC2aE = document.getElementById("headerC2a");

const footerE = document.getElementById("footer");
const footerL1E = document.getElementById("footerL1");
const footerL2E = document.getElementById("footerL2");
const footerL3E = document.getElementById("footerL3");
const footerR1E = document.getElementById("footerR1");
const footerR2E = document.getElementById("footerR2");
const footerR3E = document.getElementById("footerR3");
const footerC2aE = document.getElementById("footerC2a");

const mainE = document.getElementById("main");
const palE = document.getElementById("pal");
const elementos = document.getElementById("elementos");
const trabalhos = document.getElementById("trabalhos");
const palThumb = document.getElementById("palThumb");
const palNome = document.getElementById("palNome");
const palId = document.getElementById("palId");
const qualidadeElement = document.getElementById("qualidade");
const qualidadeNumber = document.getElementById("qualidadeNumber");
const qualidadeText = document.getElementById("qualidadeText");
const iconAnterior = document.getElementById("iconAnterior");
const iconProximo = document.getElementById("iconProximo");

let palAnterior;
let palProximo;

let aberto = false;

function openClose() {

    if(!aberto) {
        
        aberto = !aberto;
        
        headerE.classList.toggle("open");
        headerL1E.classList.toggle("open");
        headerL2E.classList.toggle("open");
        headerL3E.classList.toggle("open");
        headerR1E.classList.toggle("open");
        headerR2E.classList.toggle("open");
        headerR3E.classList.toggle("open");
        headerC2aE.classList.toggle("open");
        
        mainE.classList.toggle("open");
        
        setTimeout(() => {
            palE.classList.toggle("open");
        }, 400);
        
        footerE.classList.toggle("open");
        footerE.classList.toggle("overflow-hidden");
        footerL1E.classList.toggle("open");
        footerL2E.classList.toggle("open");
        footerL3E.classList.toggle("open");
        footerR1E.classList.toggle("open");
        footerR2E.classList.toggle("open");
        footerR3E.classList.toggle("open");
        footerC2aE.classList.toggle("open");

    } else {
        aberto = !aberto;
        
        headerE.classList.remove("open");
        headerL1E.classList.remove("open");
        headerL2E.classList.remove("open");
        headerL3E.classList.remove("open");
        headerR1E.classList.remove("open");
        headerR2E.classList.remove("open");
        headerR3E.classList.remove("open");
        headerC2aE.classList.remove("open");
        
        mainE.classList.remove("open");
        palE.classList.remove("open");
        
        footerE.classList.remove("open");
        footerE.classList.remove("overflow-hidden");
        footerL1E.classList.remove("open");
        footerL2E.classList.remove("open");
        footerL3E.classList.remove("open");
        footerR1E.classList.remove("open");
        footerR2E.classList.remove("open");
        footerR3E.classList.remove("open");
        footerC2aE.classList.remove("open");
    }
}

function main() {

    pals.sort((a, b) => a.id - b.id);

    getPal("1");
}

function getPal(id) {

    const index = pals.findIndex(pal => pal.id === id);

    if(index > -1) {
        if(index === 0) {
            palAnterior = pals[pals.length - 1];
            palProximo = pals[1];
        } else if(index === pals.length - 1) {
            palAnterior = pals[pals.length - 2];
            palProximo = pals[0];
        } else {
            palAnterior = pals[index - 1];
            palProximo = pals[index + 1];
        }

        iconAnterior.src = `./assets/img/pals/${palAnterior.id}.png`;
        iconAnterior.onclick = () => { getPal(palAnterior.id) };

        iconProximo.src = `./assets/img/pals/${palProximo.id}.png`;
        iconProximo.onclick = () => { getPal(palProximo.id) };
    }

    const pal = pals.find(pal => pal.id === id);

    if(!pal) {
        return
    }

    elementos.textContent = "";

    pal.elementos.forEach(elemento => {
        const img = document.createElement("img");
        img.className = "icon";
        img.src = `./assets/img/elementos/${elemento}.png`;

        elementos.append(img);
    });

    trabalhos.textContent = "";

    pal.trabalhos.forEach(trabalho => {

        const div = document.createElement("div");
        div.className = "trabalho";

        const img = document.createElement("img");
        img.className = "icon";
        img.src = `./assets/img/trabalho/${trabalho.nome}.png`;

        const span = document.createElement("span");
        span.className = "nivel";
        span.textContent = trabalho.valor;

        div.append(img, span);
        trabalhos.append(div);    

    });


    palThumb.src = `./assets/img/pals/${pal.id}.png`;
    palNome.textContent = pal.nome;
    palId.textContent = pal.idView;

    const qualidade = getQualidade(pal.qualidade);

    qualidadeElement.className = `qualidade ${qualidade.id}`;
    qualidadeNumber.textContent = pal.qualidade;
    qualidadeText.textContent = qualidade.text;


}

function getQualidade(qualidade) {
    
    if(qualidade < 5) {
        return { id: "comum", text:"Comum" };
    } else if(qualidade >= 5 && qualidade < 8) {
        return { id: "raro", text:"Raro" };
    } else if(qualidade >= 8 && qualidade < 11) {
        return { id: "epico", text:"Épico" };
    } else {
        return { id: "lendario", text:"Lendário" };
    }
}

main();