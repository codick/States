import React, { useState } from 'react'

function Task_1() {
    const [name, setName] = useState('Alexandr');
    const [surname, setSurname] = useState('Zhirenkin');
    const [age, setAge] = useState(17);
    const [ban, setBan] = useState(false);
    const style = {
      'margin-bottom':
      '25px'
    }
    function changeName(){
        setName('Timyr');
    } 
    let text
    if (ban == true){
      text = 'Забанить'
    }else{
      text = 'Разбанить'
    }
    

  return ( <div style={style}>
    <span> {name}</span><br></br>
    <button onClick={changeName}>Изменить имя</button><br></br>
    <span> {surname}</span><br></br>
    <button onClick={()=> setSurname('ZekrinTown')}>Изменить фамилию</button><br></br>
    <span> {age}</span><br></br>
    <p>{ban ? 'Не забанен': 'Забанен'}</p> <br></br>
    <button onClick={()=> setBan(!ban)}>{text}</button><br></br>
    <button onClick={()=> setAge(age + 1)}>Ура, день рождения за один клик!</button><br></br>
    <button onClick={()=> setAge(age - 1)}>Ура, не день рождения за один клик!</button><br></br>

  </div> )
}

export default Task_1