import { Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material"

const LoginForm = ({ handleCloseDialog, handleToggleForm }) => {

    return (
        <Stack spacing={2}>
            <TextField
                size="small"
                label="Email"
            />
            <TextField
                size="small"
                label="Password"
            />
            <FormControlLabel
                control={<Checkbox/>}
                label="Remember Me"
            />
            <Stack spacing={1}>
                <Typography variant='body1' textAlign='center'>
                    Don`t have Account? <Button size='small' onClick={handleToggleForm}>Register</Button>
                </Typography>
                <Typography variant='body1' textAlign='center'>
                    Forgot your password? <Button size='small'>Reset It</Button>
                </Typography>
            </Stack>
            <Button
                variant="contained"
            >
                Login
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

export default LoginForm