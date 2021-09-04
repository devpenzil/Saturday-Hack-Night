import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Repo() {
    const [repos, setRepos] = useState([])
    const fetchingrepos = () => {
        axios.get(`https://api.github.com/users/${localStorage.getItem("guser")}/repos`).then((Response)=>{
            setRepos(Response.data)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
       fetchingrepos()
    }, [])
    return (
        <div className="mt-10">
            <div className="w-full flex flex-wrap">
                {repos ? 

                
                    repos.map((obj:any)=>{
                        return(
                        <div className="w-full md:w-1/3 mb-4">
                            <a href={obj.html_url}>
                                <div className="card m-2 p-2 bg-purple-200 hover:bg-purple-800 hover:text-white hover:shadow-lg rounded-lg h-full">
                                    <div className="text-base font-semibold">{obj.name}</div>
                                    <div className="flex justify-between text-sm mt-2 ">
                                        <div>{obj.language}</div>
                                        <div>{obj.size} kb</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        )
                    })  
                
                
                : "loading"}

                

            </div>
        </div>
    )
}

export default Repo
