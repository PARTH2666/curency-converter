let currency_data;
export default function data(from) {
  const url = `https://v6.exchangerate-api.com/v6/43a5faf819d1c4fe53dd3b55/latest/${from}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "43a5faf819d1c4fe53dd3b55",
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      currency_data = data;
      console.log(data);
    });

  return currency_data;
}

export const arr = [
  "INR",
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "BAM",
  "AZN",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "USD",
];

// export const convertedData = JSON.parse(localStorage.getItem("conversion_rates"))[
//   currentFormData.to
// ];
