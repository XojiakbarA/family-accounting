import { ADD_FINANCE, ADD_MEMBER, CHANGE_FINANCE, CHANGE_MEMBER, DROP_FINANCE, DROP_MEMBER, SET_AUTH_DIALOG, SET_CATEGORIES, SET_FINANCE, SET_FINANCES, SET_LOADING, SET_MEMBER, SET_MEMBERS, SET_SNACKBAR, SET_SUB_CATEGORIES, SET_USER } from "./types"

export const reducer = (state, action) => {

    let i = null

    switch (action.type) {

        case SET_LOADING:
            return { ...state, loading: action.payload }

        case SET_AUTH_DIALOG:
            return { ...state, authDialog: action.payload }
    

        case SET_USER:
            return { ...state, user: action.payload }

        case SET_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    open: action.payload.open,
                    text: action.payload.text,
                    color: action.payload.color
                }
            }

        case SET_MEMBERS:
            return { ...state, members: action.payload }

        case SET_MEMBER:
            return { ...state, member: state.members.find(item => item.id === action.payload.id) }

        case ADD_MEMBER:
            return { ...state, members: state.members.concat(action.payload) }

        case CHANGE_MEMBER:
            const members = [ ...state.members ]
            i = members.findIndex(item => item.id === action.payload.id)
            members[i] = action.payload
            return { ...state, members }

        case DROP_MEMBER:
            return { ...state, members: state.members.filter(item => item.id !== action.payload.id) }

        case SET_FINANCES:
            return { ...state, finances: action.payload }

        case SET_FINANCE:
            return { ...state, finance: state.finances.find(item => item.id === action.payload.id) }

        case ADD_FINANCE:
            return { ...state, finances: state.finances.concat(action.payload) }

        case CHANGE_FINANCE:
            const finances = [ ...state.finances ]
            i = finances.findIndex(item => item.id === action.payload.id)
            finances[i] = action.payload
            return { ...state, finances }

        case DROP_FINANCE:
            return { ...state, finances: state.finances.filter(item => item.id !== action.payload.id) }

        case SET_CATEGORIES:
                return { ...state, categories: action.payload }

        case SET_SUB_CATEGORIES:
                return { ...state, subCategories: action.payload }

        default:
            return state
    }
}