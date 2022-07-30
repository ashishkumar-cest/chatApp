import React, { useEffect, useState } from 'react'

export default function Home() {
  let data;
  let [state, setState] = useState();
  let myJSON = 
  {up:["Ford", "BMW", "Fiat"],bihar:["apple","banan","orange"],State:["please choose"]};
  myJSON = JSON.stringify(myJSON);
  myJSON = JSON.parse(myJSON)

  data = (eval(state))
  if (data === undefined) {
    data = eval('myJSON.State');
  }
  console.log(data);
  let myData = {up:["hello"],delhi:["hii"]}
  myData = JSON.stringify(myData);
  myData = JSON.parse(myData);
  console.log(myData)


  return (
    <div>
      <select onChange={(e) => setState("myJSON." + e.target.value)}>
        <option>State</option>
        <option>up</option>
        <option>bihar</option>
        <option>delhi</option>
      </select>
      <select>
        {
          data.map((item) =>
            <option>{item}</option>
          )
        }
      </select>
    </div>

  )
}
