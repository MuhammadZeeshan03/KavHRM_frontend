import { createContext, useState, useHistory, useContext} from "react";

export const AccountContext = createContext();

export default AccountContext

export const AuthProvider = ({children}) => {
    let [user, setUser] = useState(()=> (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :  null))
    let contextData = {
        user:user
    }
    return(
        <AccountContext.Provider value={{'name' : 'Dennis'}}>
            {children}
        </AccountContext.Provider>
    )
}