import React, {createContext} from "react";
import all_product from "../Components/Assets/all_product";

export const shopcontext = createContext(null);

const shopcontextProvider =(props) =>{
    const contextValue ={all_product};

    return (
        <shopcontext.Provider value={contextValue}>
           {props.children}
        </shopcontext.Provider>
     );
     
}

export default shopcontextProvider;