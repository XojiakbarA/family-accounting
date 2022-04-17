import { SET_SNACKBAR, SET_USER } from "./types"

export const reducer = (state, action) => {
    switch (action.type) {
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
    
        default:
            break;
    }
}