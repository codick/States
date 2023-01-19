import React from 'react'
import { useState } from 'react'

function Task_2() {
  const [value1, setValue1] = useState('Alexandr');
  const [value2, setValue2] = useState('Zhirenkin');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [count, setCount] = useState('');
  const [ban, setBan] = useState(false);
  const [age, setAge] = useState('');
  const [fareng, setFareng] = useState('');
  const [valueFirst, setvalueFirst] = useState('');
  const [valueSecond, setvalueSecond] = useState('');
  const [valueThird, setvalueThird] = useState('');
  const [valueFourth, setvalueFourth] = useState('');
  const [valueFifth, setvalueFifth] = useState('');
  function changeValue1(event){
    setValue1(event.target.value);
  }

  function changeValue2(event){
    setValue2(event.target.value);
  }
  function changeCount(event){
    setCount(event.target.value);
  }
  let text
  if (ban == true){
    text = 'Забанить'
  }else{
    text = 'Разбанить'
  }
  function yearAge(event){
    setAge(event.target.value);
  }
  function farengCils(event){
    setFareng(event.target.value);
  }
  return (<div>
    <input value={value1} onChange={changeValue1} /><br></br>
    <input value={value2} onChange={changeValue2} /><br></br>
    <p>{name}</p><br></br>
    <p>{surname}</p><br></br>
    <button onClick={()=> setName(value1)}>Сменить имя</button><br></br>
    <button onClick={()=> setSurname(value2)}>Сменить фамилию</button><br></br>
    <input value={count} onChange={changeCount}/><br></br>
    <p>{count.length}</p><br></br>
    <p>{ban ? 'Не забанен': 'Забанен'}</p> <br></br>
    <button onClick={()=> setBan(!ban)}>{text}</button><br></br>
    <input value={age} onChange={yearAge} /><br></br>
    <p>{2023 - age}</p><br></br>
    <input value={fareng} onChange={farengCils}/><br></br>
    <p>{Math.round((5/9) * (fareng - 32))}</p>
    <input value={valueFirst} onChange={(event) => setvalueFirst(+event.target.value)}/>
    <input value={valueSecond} onChange={(event) => setvalueSecond(+event.target.value)}/>
    <input value={valueThird} onChange={(event) => setvalueThird(+event.target.value)}/>
    <input value={valueFourth} onChange={(event) => setvalueFourth(+event.target.value)}/>
    <input value={valueFifth} onChange={(event) => setvalueFifth(+event.target.value)}/>
    <p>{(valueFirst+valueSecond+valueThird+valueFourth+valueFifth)/5}</p>
  </div>
  )
}



export default Task_2