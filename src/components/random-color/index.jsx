import { useState, useEffect } from "react";

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center'
}

const colorStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  color: "#fff",
  fontSize: '2rem',
  marginTop: '50px'
}

export default function RandomColor(){
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Random utility
  function randomColorUtility(length){
    return Math.floor(Math.random() * length)
  }

  // For hex - random
  function handleCreateRandomHexColor(){
    // #674356
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = "#"
    for(let i = 0; i < 6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  // For RGB - random
  function handleCreateRandomRGBColor(){
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  useEffect(() => {
    if(typeOfColor === 'rgb') handleCreateRandomRGBColor()
    else handleCreateRandomHexColor()
  }, [typeOfColor])

  return(
    <div style={{
      width: '100vw',
      height: '100vh',
      background: color,
    }}>
      <div style={buttonStyle}>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={
          typeOfColor === 'hex' 
          ? handleCreateRandomHexColor 
          : handleCreateRandomRGBColor
          }
        >Generate Random Color</button>
      </div>
      <div style={colorStyle}>
        <h3>{typeOfColor === 'rgb' ? "RGB" : "HEX"} Color:&nbsp;</h3>
        <h3>{color}</h3>
      </div>
      

    </div>
  )


}