import React, { useState } from 'react'

export const ColorChanger = () => {
    const [showComponent, setShowComponent] = useState(true)
    const color = 'red'

    return (
      <div> 
        <button onClick={() => { setShowComponent(!showComponent) }}>Click Me</button>
        {showComponent && <div style={{backgroundColor: color, height: 200, width: 200}}></div>}
      </div>
    )
}