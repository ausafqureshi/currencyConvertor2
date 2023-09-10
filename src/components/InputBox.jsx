import React, { useId } from "react";

const InputBox = ({
  label,
  chassName = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyoptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex ${className}">
      <div className="w-1/2">
        <label
          className="text-black/400 mb-2 inline-block"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          type="number"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-center text-right">
        <p className="text-black/40 mb-2 w-full">currency type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
