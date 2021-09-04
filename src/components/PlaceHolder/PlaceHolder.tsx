import React, {useState} from 'react'
import place from '../../assets/octo.gif'
function PlaceHolder() {
    const [username, setUsername] = useState("")
    const userSubmited = (e:any) => {
        e.preventDefault()
        localStorage.setItem("guser",username)
    }
    console.log(username)
    return (
        <div className="container flex md:flex-row items-center flex-col mx-auto">
           <div className="w-full md:w-1/2 p-2">
                <img src={place} alt="" className="w-full" />
           </div>
           <div className="w-full md:w-1/2 p-2">
                <div className="text-4xl text-purple-600">Hey Folks</div>
                <div className="text-7xl text-purple-600 font-bold">We are the cats</div>
                <form onSubmit={userSubmited}>
                <input onChange={(e)=>setUsername(e.target.value)} className="bg-white px-6 py-2 border-2 border-purple-600 mt-4 placeholder-purple-600 outline-none rounded-full mx-auto" type="text" name="userid" id="userid" placeholder="enter your github username" />
                </form>
           </div>
        </div>
    )
}

export default PlaceHolder
