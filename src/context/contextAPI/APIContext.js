import {createContext } from "react";
import { redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { apiBase } from "../../services/api.ts";
const APIContext = createContext();

const APIContextProvider = ({children}) => {
    const authUser = async (values) => {
        const newCookies = new Cookies();
        try {
          const {data} = await apiBase.post<IUserLoginResponse>("/user/login", values);
          newCookies.set(accesstoken, data.token);
          redirect("/dashboard");
          return data;
        } catch (error) {
          console.warn(error);
        }
    };

    const getAllDoctors = async () =>{
        try {
            const {data} = await apiBase.get("/doctors");
            return data;
        } catch(error) {
            console.warn(error)
        }
    }

    return (
        <APIContext.Provider value={{getAllDoctors, authUser}}>
            {children}
        </APIContext.Provider>
    )
}


APIContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default APIContext;
export { APIContextProvider }