import { Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import LoginIcon from '@mui/icons-material/Login'
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from "formik"
import { useDispatch } from "../../hooks/useDispatch"
import { login } from "../../context/asyncActions"
import { loginValidationSchema } from "../../utils/validate"
import { useStore } from "../../hooks/useStore"
import { useNavigate } from "react-router-dom"

const LoginForm = ({ handleCloseDialog, handleToggleForm }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loading = useStore(store => store.loading)

    const { handleSubmit, getFieldProps, touched, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: ''
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (data, { setSubmitting }) => {
            await login(dispatch, data, navigate)
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <TextField
                    size="small"
                    label="Email"
                    error={ touched.email && Boolean(errors.email) }
                    helperText={ touched.email && errors.email }
                    { ...getFieldProps('email') }
                />
                <TextField
                    size="small"
                    label="Password"
                    type="password"
                    error={ touched.password && Boolean(errors.password) }
                    helperText={ touched.password && errors.password }
                    { ...getFieldProps('password') }
                />
                <FormControlLabel
                    control={<Checkbox { ...getFieldProps('remember') } />}
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
                <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                    startIcon={<LoginIcon/>}
                >
                    Login
                </LoadingButton>
                <Button
                    variant="outlined"
                    onClick={handleCloseDialog}
                    startIcon={<CloseIcon/>}
                >
                    Cancel
                </Button>
            </Stack>
        </form>
    )
}

export default LoginForm