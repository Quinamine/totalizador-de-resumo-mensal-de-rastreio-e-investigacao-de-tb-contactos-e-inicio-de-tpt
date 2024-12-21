"use strict"
const referencia = {
    retornarIndicadorEfaixaEtaria(inputTarget) {
        const linhaOutput = document.querySelector(".reference__output--indicador");
        const colOutput = document.querySelector(".reference__output--idade");
        const celulaComFocoEirmas = inputTarget.parentElement.children;
        let CelulaComFocoIndex = 0;
        for (let i = 0; i < celulaComFocoEirmas.length; i++) {
            if(celulaComFocoEirmas[i] === inputTarget) CelulaComFocoIndex = i-1;
        }
        let indicadoresColunares = document.querySelectorAll(".seccao-1__header__linha-de-indicadores span");
        let indicadorLinear = inputTarget.parentElement.children[0].querySelector("span");
        let tituloDaSeccao = ""
        // Seccoes 2 e 3
        let isSection2 = inputTarget.parentElement.parentElement.matches(".ficha__seccao__body--2");
        let isSection3 = inputTarget.parentElement.parentElement.matches(".ficha__seccao--3");
        if(isSection2) {
            tituloDaSeccao = document.querySelector("#titulo-da-seccao-2").textContent;
            indicadoresColunares = document.querySelectorAll(".seccao__header__linha-de-faixas-etarias span");
            indicadorLinear = inputTarget.parentElement.children[0];
        }
        if(isSection3) {
            tituloDaSeccao = document.querySelector("#titulo-da-seccao-3").textContent;
            let indicadorColunar = document.querySelector(`.${inputTarget.dataset.indicadorcolunar}`);
            if(inputTarget.dataset.subindicadorLinear) {
                let subindicadorLinear = document.querySelector(`.${inputTarget.dataset.subindicadorlinear}`); 
                linhaOutput.textContent = `${tituloDaSeccao} ${indicadorLinear.textContent}: ${subindicadorLinear.textContent}`;
            }
            colOutput.textContent = indicadorColunar.textContent;
            return !1;
        }
        let indicadorColunar = indicadoresColunares[CelulaComFocoIndex];
        colOutput.textContent = indicadorColunar.textContent;
        linhaOutput.textContent = `${tituloDaSeccao} ${indicadorLinear.textContent}`;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll(".ficha__seccao input");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            if(!inputCelular.matches("[readonly]")) {
                referencia.retornarIndicadorEfaixaEtaria(inputCelular);
            }
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;