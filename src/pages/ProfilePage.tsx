import React from 'react'
import Profile from '../components/Profile/Profile'
import Repo from '../components/Repo/Repo'

function ProfilePage() {
    return (
        <div>
            <div className="container mx-auto flex md:flex-row flex-col h-screen overflow-auto">
                <div className="w-full md:w-1/3 md:h-screen md:overflow-auto">
                   <Profile />
                </div>
                <div className="w-full md:w-2/3 md:h-screen md:overflow-auto">
                    <Repo />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
