import { useEffect, useReducer } from "react";
import Registration from "../Registration/Registration";

const DataHandler = () =>
{

    const SaveInfo = (info) =>
    {
        const data = info;
        console.log(data);

            const localData = localStorage.getItem('user');
		    const localDataObject = JSON.parse(localData);
        	var user = [];
			if (localDataObject == null) {
				user = [];
			}
            else
            {
                user = localDataObject;
            }
            user.push(data);
            console.log(data);
            localStorage.setItem('user', JSON.stringify( user ));


    }

    return(
        <div>
            <Registration OnSaveInfo = {SaveInfo}/>
        </div>
    )
}

export default DataHandler;