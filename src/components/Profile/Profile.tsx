import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Loader from '../Loader/Loader'
function Profile() {
    const [user, setUser]:any = useState()
    const history = useHistory()
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
    const backtohome = () => history.push("/")
    return (
        <div>
            {user ? 
            <div>
                <div  className="card  m-4 p-4 shadow-lg rounded-lg bg-purple-200 mt-10">
                    <img src={user.avatar_url} alt="avatar" className="w-32 mx-auto rounded-full border-4 border-purple-400" />
                    <div className="mt-10">
                        <div className="text-center text-4xl font-bold">
                            {user.name}
                        </div>
                        <div className="text-center">@{user.login}</div>
                        <div className="mt-4 text-center"><i className="ri-map-pin-line"></i> {user.location}</div>
                        <div className="w-full flex flex-wrap mt-6 text-lg">
                            <div className="w-1/3">
                                <div className="m-2  bg-purple-400 p-4 shadow-lg rounded-2xl text-center">
                                     <i className="ri-user-follow-line"></i> {user.followers}
                                </div>
                            </div>
                            <div className="w-1/3">
                            <div className="m-2  bg-purple-400 p-4 shadow-lg rounded-2xl text-center">
                            <i className="ri-user-follow-fill"></i> {user.following}
                                </div>
                            </div>
                            <div className="w-1/3">
                            <div className="m-2 bg-purple-400 p-4 shadow-lg rounded-2xl text-center">
                            <i className="ri-git-repository-line"></i> {user.public_repos}
                                </div>
                            </div>
                        </div>
                        {user.bio ?
                            <div className="bg-purple-400 p-2 text-white text-center font-medium rounded-lg mt-4">
                             {user.bio}
                            </div>
                        : ""}

                        <div onClick={backtohome} className="bg-red-400 cursor-pointer p-2 text-white text-center font-medium rounded-lg mt-4">
                            Check Another profile
                        </div>
                    </div>
                </div>
            </div>
            : <Loader />}
        </div>
    )
}

export default Profile
