import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "../css/currency.css";
import axios from "axios";

function Currency() {
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState("");

    let token = "fca_live_FXhn90pUyFbfVTdrOWM2D7FM3b9wcfnXrzIYN0tO";
    let baseUrl = "https://api.freecurrencyapi.com/v1/latest";

    const exchange = async () => {
        try {
            const response = await axios.get(
                `${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`
            );
            const result = (response.data.data[toCurrency] * amount).toFixed(2);
            setResult(result);
        } catch (error) {
            console.log("hata olustu ", error);
        }
    };

    return (
        <div>
            <div className="currency-main">
                <div className="title-box">
                    <h3 className="title">
                        DÖVİZ KURU UYGULAMASI
                    </h3>
                </div>
                <div className="column">
                    <div className="column-up">
                        <input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="amount-input"
                        />
                        <select
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="first-currency-option"
                        >
                            <option selected="">USD</option>
                            <option>EUR</option>
                            <option>JPY</option>
                            <option>BGN</option>
                            <option>CZK</option>
                            <option>DKK</option>
                            <option>GBP</option>
                            <option>HUF</option>
                            <option>PLN</option>
                            <option>RON</option>
                            <option>SEK</option>
                            <option>CHF</option>
                            <option>ISK</option>
                            <option>NOK</option>
                            <option>HRK</option>
                            <option>RUB</option>
                            <option>TRY</option>
                            <option>AUD</option>
                            <option>BRL</option>
                            <option>CAD</option>
                            <option>CNY</option>
                            <option>HKD</option>
                            <option>IDR</option>
                            <option>ILS</option>
                            <option>INR</option>
                            <option>KRW</option>
                            <option>MXN</option>
                            <option>MYR</option>
                            <option>NZD</option>
                            <option>PHP</option>
                            <option>SGD</option>
                            <option>THB</option>
                            <option>ZAR</option>
                        </select>

                        <FaArrowRight className="icon" />

                        <select
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="second-currency-option"
                        >
                            <option selected="">TRY</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>JPY</option>
                            <option>BGN</option>
                            <option>CZK</option>
                            <option>DKK</option>
                            <option>GBP</option>
                            <option>HUF</option>
                            <option>PLN</option>
                            <option>RON</option>
                            <option>SEK</option>
                            <option>CHF</option>
                            <option>ISK</option>
                            <option>NOK</option>
                            <option>HRK</option>
                            <option>RUB</option>
                            <option>AUD</option>
                            <option>BRL</option>
                            <option>CAD</option>
                            <option>CNY</option>
                            <option>HKD</option>
                            <option>IDR</option>
                            <option>ILS</option>
                            <option>INR</option>
                            <option>KRW</option>
                            <option>MXN</option>
                            <option>MYR</option>
                            <option>NZD</option>
                            <option>PHP</option>
                            <option>SGD</option>
                            <option>THB</option>
                            <option>ZAR</option>
                        </select>
                        <input
                            value={result}
                            onChange={(e) => setResult(e.target.value)}
                            type="text"
                            className="result-input"
                        />
                    </div>
                    <div className="button-main">
                        <button className="button" onClick={exchange}>
                            ÇEVİR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Currency;