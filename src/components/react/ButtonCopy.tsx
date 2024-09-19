import React, { useState, useEffect } from "react"

const ButtonCopy = () => {
    const [isCopy, setIsCopy] = useState(false)

    useEffect(() => {
        setIsCopy(false)
    }, [])

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(`${process.env.EMAIL}`).then(() => {
                setIsCopy(true)
                setTimeout(() => {
                    setIsCopy(false)
                }, 2000)
            })
        } catch (error) {
            console.error("Error copying email:", error);
        }
    }
    return (
        <>
            <button className="flex hover:bg-zinc-700 text-zinc-400 px-4 py-1.5 rounded-2xl border border-zinc-700 gap-2 items-center transitionSetting" onClick={handleCopy}>
                {isCopy ? "Copied!" : "Email"}
            </button>
        </>
    )
}
export default ButtonCopy