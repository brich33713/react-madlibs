import react, { useState } from 'react'


const AddCommas = () => {
    const [input,changeInput] = useState("")
    const [formatedNumber,changeFormatedNumber] = useState()

    function format(num){
    
    let decimal = "";
    let positivity = "";
    
    num = num.toString().split("")
    
    if(num.length < 4){
        return num.join("")
    }

    if(num[0] === "-"){
        num.shift()
        positivity = "-"
    }

    if(num.indexOf(".") !== -1){
        num.join("")
        decimal = num.slice(num.indexOf("."))
        num.split("")
        num.splice(num.indexOf("."))
    }
    
    let length = num.length
    for(let i = 1;(i*3) < length;i++){
        num.splice((length-i*3),0,",")
    }

    return positivity + num.join("") + decimal
}

    function handleChange(e){
        const {name,value} = e.target;
        changeInput(value)
    }

    function handleClick(e){
        e.preventDefault()
        changeFormatedNumber(
            
            format(parseInt(input))
        )
    }

    return (
    <div>
        <h1>Add Commas</h1>
        <form>
            <label htmlFor="input">Enter Number:</label>
            <input type="text" onChange={handleChange} data-testid="input"/>
            <button onClick={handleClick} data-testid="convert">Convert Number</button>
        </form>
        <p data-testid="output">{formatedNumber}</p>
    </div>
    )
}

export default AddCommas;