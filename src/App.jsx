import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/17324141/pexels-photo-17324141/free-photo-of-bonnet-of-black-bwm-m4.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyoptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-10 translate-x-20 border-white rounded-md bg-blue-600 px-4 py-2 "
                    onClick={swap}
                  >
                    Swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="to"
                    amount={convertedAmount}
                    currencyoptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                  />
                  <button
                    className="mt-2 w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    onClick={convert}
                  >
                    CONVERT : {from.toLocaleUpperCase()} to{" "}
                    {to.toLocaleUpperCase()}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
