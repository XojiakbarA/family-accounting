import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const ConfirmDialog = ({ title, open, content, loading, onClose, handleConfirmClick }) => {

    return (
        <Dialog open={open} onClose={onClose} maxWidth='xs' fullWidth>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>
                <DialogContentText height={40}>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={loading}>No</Button>
                <Button onClick={handleConfirmClick} disabled={loading}>Yes</Button>
            </DialogActions>
            {loading && <CircularProgress size={25} sx={{position: 'absolute', top: 15, right: 20}}/>}
        </Dialog>
    )
}

export default ConfirmDialog