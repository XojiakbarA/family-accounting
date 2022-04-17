import { useEffect, createContext, useReducer } from 'react'
import { getUser } from './asyncActions'
import { reducer } from './reducer'

export const StoreContext = createContext(null)
export const DispatchContext = createContext(null)

export const AppProvider = ({ children }) => {

    const initState = {
        user: null,
        snackbar: {
            open: false,
            text: null,
            color: 'success'
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        getUser(dispatch)
    }, [])

    return (
        <StoreContext.Provider value={{ ...state }}>
            <DispatchContext.Provider value={dispatch}>
                { children }
            </DispatchContext.Provider>
        </StoreContext.Provider>
    )
}