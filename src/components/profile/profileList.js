import { useEffect, useState } from "react"
import axios from "axios";

const ProfileList = () => {
    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        const getProfile = async () => {
            const data = await axios.get("http://localhost:9091/api/v1/profiles");
            return data;
        }

        getProfile()
            .then((res) => {
                setProfileList(res.data.data)
            })
    }, [])

    console.log(profileList)
    return (
        <div style={{ margin: "0 auto", width: "700px"}}>
            {profileList.map(profile => (
                <div 
                    style={{ border: "1px solid #000", display: "flex", gap: "50px", justifyContent: "center" }}
                >
                    <p>Name: {profile.name}</p>
                    <p>Designation: {profile.designation}</p>
                    <p>Address: {profile.address}</p>
                </div>
            ))}
        </div>
    )
}

export default ProfileList;