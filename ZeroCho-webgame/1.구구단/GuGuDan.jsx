const React = require('react');
const { useState,  useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const ref = useRef(null);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답 == ' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            ref
                .current
                .focus();

        } else {
            setResult('오답');
            setValue('');
            ref
                .current
                .focus();
        }
    };

    return (
        <>
            <div>{first}
                곱하기 {second}는?</div>
            <form onSubmit={onSubmit}>
                <input ref={ref} onChange={onChange} value={value}/>
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </>

    );
};

module.exports = GuGuDan;
