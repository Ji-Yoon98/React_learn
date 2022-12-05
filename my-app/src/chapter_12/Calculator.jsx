import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperaturn, convert) {
    const input = parseFloat(temperaturn);
    if(Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperaturn, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperaturn) => {
        setTemperature(temperaturn);
        setScale("c");
    };

    const handleFahrenheitChange = (temperaturn) => {
        setTemperature(temperaturn);
        setScale("f");
    };

    const celsius = 
        scale === "f" ? tryConvert(temperaturn, toCelsius) : temperaturn;
    const fahrenheit =
        scale === "c" ? tryConvert(temperaturn, toFahrenheit) : temperaturn;

    return (
        <div>
            <TemperatureInput 
                scale="c"
                temperaturn={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperaturn={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;