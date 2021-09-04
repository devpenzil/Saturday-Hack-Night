import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
    const [user, setUser]:any = useState()
    const fetchinguserdetails = () => {
        axios.get(`https://api.github.com/users/${localStorage.getItem("guser")}`).then((Response)=>{
            setUser(Response.data)
        }).catch((Error)=>[
            console.log(Error)
        ])
    }
    useEffect(() => {
       fetchinguserdetails()
    }, [])
    return (
        <div>
            {user ? 
            <div>
                <div  className="card  m-4 p-4 shadow-lg rounded-lg bg-purple-200 mt-10">
                    <img src={user.avatar_url} alt="avatar" className="w-32 mx-auto rounded-full" />
                    <div className="mt-10">
                        <div className="text-center text-4xl font-bold">
                            {user.name}
                        </div>
                        <div className="text-center">@{user.login}</div>
                        <div className="bg-purple-400 p-2 text-white text-center font-medium rounded-lg mt-4">
                            {user.bio}
                        </div>
                    </div>
                </div>
            </div>
            : " loading"}
        </div>
    )
}

export default Profile
