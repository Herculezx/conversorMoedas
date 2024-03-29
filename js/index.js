const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

  console.log(currencySelect.value);
  const dolarToday = 5.2;
  const euroToday = 6.2;
  const argToday = 171;

  // Dolar convert
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  // Euro convert
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

    // Peso ARG convert
    if (currencySelect.value == "arg") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
        }).format(inputCurrencyValue * argToday);
      }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");
  const currencyValue = document.querySelector(".currency-value");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/dolar.png"
    currencyValue.innerHTML = "US$ 0.0"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "/assets/euro.png"
    currencyValue.innerHTML = "0.0 €"
  }
  
  if (currencySelect.value == "arg") {
    currencyName.innerHTML = "Peso Argentino";
    currencyImage.src = "/assets/arg.png"
    currencyImage.style.borderRadius = "400px"
    currencyImage.style.height = "50px"
    currencyValue.innerHTML = "ARS 0.0"
  }

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
