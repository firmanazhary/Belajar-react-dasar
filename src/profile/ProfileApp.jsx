import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";
export default function ProfileApp(){
    const [name,setName] =useState("jhon doe")
    return(
        <>
        <ProfileContext.Provider value={name} >
            <h1>Profile APP</h1>
            <ProfileForm name={name} setName={setName} />
                <Profile />
                <ProfileAddress />
        </ProfileContext.Provider>
        </>
    )
}