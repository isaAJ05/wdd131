// Seleccionamos los <li> padres para leer el texto
const tempLi = document.querySelector("#temperature").parentElement;
const windLi = document.querySelector("#wind").parentElement;
const windChillElement = document.querySelector("#windChill");

const temp = parseFloat(tempLi.textContent.replace("Temperature:", "").trim()); // 12
const windSpeed = parseFloat(windLi.textContent.replace("Wind:", "").trim());   // 6

function calculateWindChill(t, s) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
}

let windChillValue;
if (temp <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temp, windSpeed) + " °C";
} else {
    windChillValue = "N/A";
}

windChillElement.innerHTML = `<span class="highlight">${windChillValue}</span>`;

