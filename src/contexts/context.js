import React, { createContext, useState, useEffect } from "react"

export const AppContext = createContext();

const AppProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 1000 * 7)
    }, [setIsOpen])


    return (
        <AppContext.Provider value={[isOpen, setIsOpen]}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppProvider