import { useState, useEffect } from 'react'


const useColor = (value = 20) => {
    const [color, setColor] = useState([])
    let array = []
    useEffect(() => {
        for (var i = 0; i < value; i++) {
            array.push({
                red: Math.random() * 255,
                green: Math.random() * 255,
                blue: Math.random() * 255
            })
        }
        setColor(array)
    }, [])

    return color
}

export default useColor