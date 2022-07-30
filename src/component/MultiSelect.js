import React, { useState } from 'react'
import Select from "react-select";
export default function MultiSelect() {
    const [selectedOptions, setSelectedOptions] = useState();

    // Array of all options
    const optionList = [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue" },
      { value: "white", label: "White" }
    ];
  
    // Function triggered on selection
    function handleSelect(data) {
      setSelectedOptions(data);
    }
  return (
    <div>MultiSelect</div>
  )
}
