import { createContext, useState } from 'react';

export const appContext = createContext({});

const initalContext = {
    isHoveringCTA: false
}

type props = {
    children?: React.JSX.Element[]
}

export const AppContext = ({ children }: props) => {
    const [context, setContext] = useState<any>(initalContext);

    return (
        <appContext.Provider value={{ context, setContext }}>
            {children}
        </appContext.Provider>
    )
}
