import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //'{}' isliye use kra agr khali api bhi fetch kre to error na aye
  // jb event triggered hoga to call hojayega, jb ye hook load hoga tb is hook ko call kru ,mtlb api call kru
  useEffect(() => {
    fetch(
         `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
    
      .then((res) => res.json()) // api convert in json
      .then((res) => setData(res[currency])); // setData me curreny dal di hume '.' se bhi access kr skte the humne '[]' use kre
     
  }, [currency]);

  console.log(`Data ${currency}`,data); 
  return data;
}

export default useCurrencyInfo;
