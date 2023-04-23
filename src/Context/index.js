import { createContext, useState } from "react";

export const SelectContext = createContext()

const ViewProvider = ({ children }) => {
    const [tableView, setTableView] = useState(false)
    const showTable = () => setTableView(true)
    const showCard = () => setTableView(false)

    return (
        <SelectContext.Provider value={{ tableView, showTable, showCard }}>
            {children}
        </SelectContext.Provider>

    )

};

export default ViewProvider