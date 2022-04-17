import { useEffect, createContext, useReducer } from 'react'
import { fetchUser } from '../api'
import { setLoading, setUser } from './actions'
import { reducer } from './reducer'

export const StoreContext = createContext(null)
export const DispatchContext = createContext(null)

export const AppProvider = ({ children }) => {

    const initState = {
        loading: false,
        authDialog: false,
        user: null,
        snackbar: {
            open: false,
            text: null,
            color: null
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        const getUser = async (dispatch) => {
            try {
                dispatch(setLoading(true))
                const res = await fetchUser()
                if (res.status === 200) {
                    dispatch(setUser(res.data))
                    dispatch(setLoading(false))
                }
            } catch (e) {
                console.log(e)
                dispatch(setLoading(false))
            }
        }
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