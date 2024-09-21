function useButtonCopy(){
    try {
        const email = "coihsan@gmail.com"
        navigator.clipboard.writeText(email).then(() =>{
            setTimeout(() =>{
                window.alert("Email berhasil disalin ke clipboard!")
            }, 2000)
        })
    } catch (error) {
        console.log(error)
    }
}