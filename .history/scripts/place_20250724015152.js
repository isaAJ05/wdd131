const temperature = document.querySelector("#temperature");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#windChill");

const temp = parseFloat(tempLi.textContent.replace("Temperature:", "").trim()); // 12
const windSpeed = parseFloat(windLi.textContent.replace("Wind:", "").trim()); 

function calculateWindChill(t, s) {
    return (
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(s, 0.16) +
        0.4275 * t * Math.pow(s, 0.16)
    ).toFixed(1); 
}

// Check conditions before calculating
let windChillValue;
if (temp <= 50 && windSpeed > 3) {
    windChillValue = calculateWindChill(temp, windSpeed) + " °F";
} else {
    windChillValue = "N/A";
}
windChill.innerHTML = `<span class="highlight">${windChillValue}</span>`;