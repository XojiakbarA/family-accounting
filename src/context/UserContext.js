import { useState, useEffect, useMemo, createContext } from 'react'
import { fetchUser, loginUser, logoutUser } from '../api'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const getUser = async () => {
            try {
                const res = await fetchUser()
                if (res.status === 200) {
                    setUser(res.data.data)
                }
            } catch ({ response }) {
                
            }
        }

        getUser()

    }, [])

    const login = async (data) => {
        try {
            const res = await loginUser(data)
            if (res.status === 204) {
                setUser(res.data.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const logout = async () => {
        try {
            const res = await logoutUser()
            if (res.status === 204) {
                setUser(null)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const values = useMemo(() => ({ user, login, logout }), [user])

    return (
        <UserContext.Provider value={values}>
            { children }
        </UserContext.Provider>
    )
}