import { Alert, Snackbar } from "@mui/material"
import { setSnackbar } from "../context/actions"
import { useDispatch } from "../hooks/useDispatch"
import { useStore } from "../hooks/useStore"


const MySnackbar = () => {

    const dispatch = useDispatch()
    const { open, text, color } = useStore(store => store.snackbar)

    const handleClose = () => {
        dispatch(setSnackbar(false, null, 'error'))
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                severity={color}
                variant='standard'
                elevation={6}
                color={color}
                onClose={handleClose}
            >
                { text }
            </Alert>
        </Snackbar>
    )
}

export default MySnackbar