import { useState } from "react";
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currecyInfo = useCurrencyInfo(from);

  //eg in 'usd' object 'inr=80' humare pass .json me key and value hai,user key select krega hum value denge, ab hume object me se sari keys nikalni hai
  const options = Object.keys(currecyInfo);

  //swap the 'usd' to 'inr'
  const swap = () => {
    setFrom(to); // from me to ki value daal di
    setTo(from); // viceversa
    setConvertedAmount(amount); // values bhi change hongi
    setAmount(convertedAmount);
  };

  // eg convert 10Usd to inr = 10*80 ,this work is we are doing in 'setConvertedAmount' context
  const convert = () => {
    setConvertedAmount(amount * currecyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        // backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        // backgroundImage: `url('https://img.freepik.com/free-vector/gradient-stock-market-concept_52683-76908.jpg?size=626&ext=jpg&ga=GA1.1.1734963653.1696700435&semt=ais')`
        backgroundImage: `url('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600')`
      }}
    >
      <div className="w-full ">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // form jb bhi call hota hai tb vo khi jata hai url pe ,usko rokne ke liye use kra
              convert();
            }}
          >
            {/* 'from' ka input  */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>

            {/* 'from' ka currency name selection */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* 'to' ka output jha value show hogi  */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable  // ye value true ho gyi aise bhi de skte hai amountDisable=true

              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
