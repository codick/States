import React, { useState } from 'react'

function Task_3() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [result3, setResult3] = useState('');
    const [resDate, setResDate] = useState('-');
    const [number, setNumber] = useState('');
    const [sum, setSum] = useState(0);
    const [proiz, setProiz] = useState(1);
    return (<div>
        <input value={value1} onChange={(event) => setValue1(event.target.value)}/>
        <input value={value2} onChange={(event) => setValue2(event.target.value)}/>
        <button onClick={() => setResult1(Number(value1) + Number(value2))}>button</button>
        <button onClick={() => setResult2(Number(value1) * Number(value2))}>button</button>
        <p>result1: {result1}</p>
        <p>result2: {result2}</p>
        <input type="date" value={date1} onChange={(event) => setDate1(event.target.value)}/>
        <input type="date" value={date2} onChange={(event) => setDate2(event.target.value)}/>
        <button onClick={() => setResDate((new Date(date1) - new Date(date2))/(1000 * 60 * 60 * 24))}>Вычислить разницу в дате</button>
        <p>Разница: {resDate}</p>
        <input value={number} onChange={(event) => setNumber(event.target.value)} 
        onBlur={() => {
            // setNumber(event.target.value)
            let num = number
            let sumRes = 0
            while (num > 0){
                sumRes += num%10
                num = Math.floor(num/10)
            }
            return setSum(sumRes)
            }}/>

        <p>Сумма: {sum}</p>

    </div>)
}


export default Task_3