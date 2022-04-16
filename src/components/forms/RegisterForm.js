import { Button, Stack, TextField, Typography } from "@mui/material"

const RegisterForm = ({ handleCloseDialog, handleToggleForm }) => {

    return (
        <Stack spacing={2}>
            <TextField
                size="small"
                label="Name"
            />
            <TextField
                size="small"
                label="Email"
            />
            <TextField
                size="small"
                label="Password"
            />
            <TextField
                size="small"
                label="Confirm Password"
            />
            <Typography variant='body1' textAlign='center'>
                Do you have Account? <Button size='small' onClick={handleToggleForm}>Log In</Button>
            </Typography>
            <Button
                variant="contained"
            >
                Register
            </Button>
            <Button
                variant="outlined"
                onClick={handleCloseDialog}
            >
                Cancel
            </Button>
        </Stack>
    )
}

export default RegisterForm