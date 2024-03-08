
import React,{useId} from "react";

function InputBox ({
    label, 
    amount, 
    onChangeAmount, 
    onCurrencyChange, 
    currencyOptions = [], 
    selectCurrency = 'usd', 
    amountDisable = false , 
    currencyDisable = false,
    className = "", 
}) {
    const amountInputId = useId()



    return (
        <div className={`bg-gray-200  flex rounded-lg p3 text-sm ${className}`}>
            <div className = 'w-1/2 p-5'>
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input 
                    id = {amountInputId}
                    type="number"
                    placeholder="amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e)=> onChangeAmount && onChangeAmount(Number(e.target.value))}
                 />
            </div>


            <div  className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className="rounded-lg px-1 py-1 bg-gray-100
                    cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                    <option value={currency}>
                        {currency}
                    </option>))}
                </select>

            </div>
        </div>
    )

}

export default InputBox;