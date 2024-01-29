import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //'{}' isliye use kra agr khali api bhi fetch kre to error na aye
  // jb event triggered hoga to call hojayega
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // api convert in json
      .then((res) => setData(res[currency])); // setData me curreny dal di hume '.' se bhi access kr skte the humne '[]' use kre
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
