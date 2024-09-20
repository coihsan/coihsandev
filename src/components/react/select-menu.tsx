import React, {useState, useRef, useEffect} from 'react'
import slash from "../../assets/icons/slash.svg"
const SelectMenu = () => {
    const [selectMenu, setSelectMenu] = useState('')
    const ref = useRef(null)

    useEffect(() =>{
        const getValue = localStorage.getItem('menu')
        if(getValue){
            setSelectMenu(getValue)
        }
    },[])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setSelectMenu(event.target.value);
        localStorage.setItem('menu', event.target.value)
        window.location.href = event.target.value
    }
    
    return(
        <div className="flex items-center gap-2">
            <span className='text-zinc-400'>menu</span>
            <img className='fill-white' src={slash.src} width={22} height={22} alt="icons" />
            <select ref={ref} className='cursor-default bg-transparent rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-zinc-500 sm:text-sm sm:leading-6' onChange={handleChange} value={selectMenu}>
                <option value="/">Home</option>
                <option value="about">About</option>
                <option value="stack">Stack</option>
            </select>
        </div>
    )
}
export default SelectMenu