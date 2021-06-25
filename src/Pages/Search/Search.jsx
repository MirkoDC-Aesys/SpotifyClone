import React, { useState, useEffect } from 'react'
import Image from '../../Components/Image'
import useColor from '../../hooks/useColor'
import { container } from './Search.module.css'
import { getAllCategories } from '../../api/spotify'

export default function Search() {
    const [items, setItems] = useState([])
    const colors = useColor()

    useEffect(()=> {
        getAllCategories()
        .then(res=> {
            setItems(res.map(el => ({
                id: el.id,
                name: el.name,
                img: el.icons[0].url
            })))
        })
    }, [])

    return (
        <div className={container}>
            {items.map((el, i) => <Image key={el.id} id={el.id} title={el.name} img={el.img} color={colors[i]}/>)}
        </div>
    )
}
