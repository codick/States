import React from "react";
import { useState } from "react";
function Task_4() {
  const arr = ["Уфа", "Таганрог"];
  const [city, setCity] = useState("");
  const ages = ['от 0 до 12 лет', "от 13 до 17 лет", "от 18 до 25 лет", "старше 25 лет"];
  const [ageUser, setAgeUser] = useState('');
  const [value, setValue] = useState('text');
  const [value2, setValue2] = useState('text');
  let text
  if(value2 == 'JavaScript'){
    text = 'Nice!'
  }else{
    text = 'Poor!'
  }
  return (
    <div>
      <select name="" id="" onChange={(event) => setCity(event.target.value)} value={city}>
        {arr.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <p>{city}</p><br></br>
      <select name="" id="" onChange={(event) => setAgeUser(event.target.value)} value={ageUser}>
        {ages.map((item) => (<option value={item}>{item}</option>))}<br></br>
      </select><br></br>
      <input type="radio" name="radio" id="" value="1" checked={value === "1" ? true: false} onChange={(event) => setValue(event.target.value)}/><br></br>
      <input type="radio" name="radio" id="" value="2" checked={value === "2" ? true: false} onChange={(event) => setValue(event.target.value)}/><br></br>
      <input type="radio" name="radio" id="" value="3" checked={value === "3" ? true: false} onChange={(event) => setValue(event.target.value)}/><br></br>

      <p>{value}</p><hr></hr>

      <input type="radio" name="radio" id="" value="Python" checked={value2 == "Python" ? true: false} onChange={(event) => setValue2(event.target.value)}/><br></br>
      <input type="radio" name="radio" id="" value="JavaScript" checked={value2 == "JavaScript" ? true: false} onChange={(event) => setValue2(event.target.value)}/><br></br>
      <input type="radio" name="radio" id="" value="C++" checked={value2 == "C++" ? true: false} onChange={(event) => setValue2(event.target.value)}/><br></br>

      <p>{value2}, {text}</p><br></br>
    </div>
  );
}

export default Task_4;
