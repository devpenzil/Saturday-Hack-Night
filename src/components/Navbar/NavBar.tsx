import React, { useState } from 'react'

function NavBar() {
    const [username, setUsername] = useState("")
    const userSubmited = (e:any) => {
        e.preventDefault()
        localStorage.setItem("guser",username)
    }
    console.log(username)
    return (
        <div>
           <div className="container mx-auto p-4">
                <div className="w-min mx-auto">
                    <form onSubmit={userSubmited}>
                        <input onChange={(e)=>setUsername(e.target.value)} className="bg-green-200 px-6 py-2 border-0 outline-none rounded-full mx-auto" type="text" name="userid" id="userid" placeholder="enter your github username" />
                    </form>
                </div>
           </div>
        </div>
    )
}

export default NavBar
