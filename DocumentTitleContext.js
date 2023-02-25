import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DocumentTitleContext = createContext()

export const DocumentTitleProvider = ({children}) => {
    const [documentTitle, setDocumentTitle] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setDocumentTitle(null);
    }, [location]);

    useEffect(() => {
        document.title = documentTitle == null ? process.env.REACT_APP_DEFAULT_DOCUMENT_TITLE : documentTitle;
    }, [documentTitle]);

    return (<DocumentTitleContext.Provider value={{ setDocumentTitle }}>
        {children}
    </DocumentTitleContext.Provider>);
}

export default function useDocumentTitle() {
    return useContext(DocumentTitleContext);
}
