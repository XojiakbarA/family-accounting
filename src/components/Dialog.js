import { Dialog, DialogContent, DialogTitle } from "@mui/material"


const MyDialog = ({ title, open, onClose, children }) => {

    return (
        <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default MyDialog