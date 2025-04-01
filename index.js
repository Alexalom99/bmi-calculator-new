// ¡Buena suerte!

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#btn");
const result = document.querySelector("#bmi-result");
const condition = document.querySelector("#weight-condition");


button.addEventListener("click", function () {
    let total = (weight.value * 10000) / height.value**2;
    let cond;
    result.value = total;
    if (total < 18.5) {
        cond = "Bajo peso";
    }else if (total < 24.9){
        cond = "Peso normal";
    }else if (total < 29.9) {
        cond = "Sobrepeso";
    }
    else {
        cond = "Obesidad";
    }
    condition.textContent = cond;
})