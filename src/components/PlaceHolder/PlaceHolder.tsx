import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router'
import place from '../../assets/octo.gif'
function PlaceHolder() {
    const [message, setMessage] = useState("")
    const history = useHistory()
    const [username, setUsername] = useState("")
    const userSubmited = (e:any) => {
        e.preventDefault()
        setMessage("Loading")
        axios.get(`https://api.github.com/users/${username}`).then((Response)=>{
            localStorage.setItem("guser",username)
            history.push(`/profile?user=${username}`)
        }).catch((Error)=>{
            setMessage("No user Found")
        })
        //
    }
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
                  <br /> 
                  <div className="mt-2">
                  {message}
                  </div>
                </form>
           </div>
        </div>
    )
}

export default PlaceHolder
