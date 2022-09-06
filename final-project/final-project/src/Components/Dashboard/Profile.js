import React, {useContext} from "react";
import GlobalContext from "../../context/GlobalContext";

const Profile = props => {

    const ctx = useContext(GlobalContext);

    const userDataParse = ctx.Cookies.get("user");
    const userData = JSON.parse(userDataParse);

    return (
        
<div class="w-full max-h-screen max-w-screen rounded-lg pt-[50px]">
    <div class="items-center">
        <img class="mb-3 w-[300px] h-[300px] rounded-full shadow-lg m-auto " src={userData.image_url} alt="Bonnie image" />
        <h5 class="mb-1 text-[2rem] font-medium text-gray-900 dark:text-white">{userData.name}</h5>
        <span class="text-md text-gray-500 dark:text-gray-400">{userData.email}</span>
    </div>
</div>

    )

}

export default Profile