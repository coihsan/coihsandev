import React, {useState, useEffect} from 'react'
import slash from "../../assets/icons/slash.svg"
const SelectMenu = () => {
    const [selectMenu, setSelectMenu] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setSelectMenu(event.target.value);
        window.location.href = event.target.value
    }
    
    return(
        <div className="flex items-center gap-2">
            <span className='text-zinc-400'>menu</span>
            {/* <img src={slash} alt="icons" /> */}
            <select className='bg-transparent outline-none focus-none' onChange={handleChange} value={selectMenu}>
                <option value="">Home</option>
                <option value="about.astro">About</option>
                <option value="stack.astro">Stack</option>
            </select>
        </div>
    )
}
export default SelectMenu