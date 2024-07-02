import React from "react";

// 'label' me =from or To ayega mtlb value le rh hu ya de rh hu
// currencyOption=[] me sare currency a jayegi in array form
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  currencyOptions = [],
}) {
  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      {/* Left section number 'From and To  and number shown is here*/}
      <div className="w-1/2">
        <label
         
          className="text-black/40 mb-2 inline-block"
        >
          {label} {/* //from ,TO */}
        </label>
        <input
          // id="amountInputId"
          className="outline-none w-full bg-transparent py-1.5 bg-gray-100 "
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange( Number(e.target.value) //Number isliye use kra kyi baar JS String return krti hai usko number me convert kra 
            )
          } // basically 'onAmountChange && onAmountChange'  condn check ho rhi hhai agr 'onAmountChange' hai to hi chalo onchange
        />
      </div>

      {/* Right side part 'currecy type' and currecncy select option */}
      <div className="w-1/2 flex flex-wrap justify-end text-right ">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 cursor-pointer bg-gray-100  outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* //jb bhi loop lgayenge 'jsx' pe tb 'key' pass krni hi pdegi,vrna 'react' 'Dom' bnate hi rhega,performace chaiye element ko loop krne ke liye to 'key' pass krenge */}
          {/* remember the key in loop in react */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
