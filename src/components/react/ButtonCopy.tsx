import { useState } from "react"

const ButtonCopy = () => {
    const [isCopy, setIsCopy] = useState(false)

    const handleCopy = () => {
        try {
            const myEmail = "coihsan@gmail.com";
            navigator.clipboard.writeText(myEmail).then(() => {
                setIsCopy(true)
                setTimeout(() => {
                    setIsCopy(false)
                }, 1000)
            })
            console.log("success")
        } catch (error) {
            console.error("Error copying email:", error);
        }
    }
    return (
        <button className="flex items-center justify-center gap-2 whitespace-nowrap text-zinc-100 transitionSetting bg-zinc-100 text-zinc-700 hover:bg-zinc-300 h-11 rounded-2xl px-4 py-2 border border-zinc-700 font-semibold" onClick={handleCopy}>
            <span>{isCopy ? "Copied!" : "Email"}</span>
            {/* <img src="/assets/icons/copy.svg" className="w-4 h-4" alt="" /> */}
        </button>
    )
}
export default ButtonCopy