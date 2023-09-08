document.addEventListener("DOMContentLoaded",function() {
    const celciusInput = document.getElementById("celcius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function() {
        const celciusValue = parseFloat(celciusInput.value);
        if (! isNaN(celciusValue)) {
            const fahrenheitValue = (celciusValue * 9/5) +32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        }
    });
});