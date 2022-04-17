import { Button, Stack, TextField, Typography } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import BorderColorIcon from '@mui/icons-material/BorderColor'
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from "formik"
import { useDispatch } from "../../hooks/useDispatch"
import { register } from "../../context/asyncActions"
import { registerValidationSchema } from "../../utils/validate"
import { useStore } from "../../hooks/useStore"
import { useNavigate } from "react-router-dom"

const RegisterForm = ({ handleCloseDialog, handleToggleForm }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useStore(store => store.loading)

    const { handleSubmit, getFieldProps, touched, errors } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        },
        validationSchema: registerValidationSchema,
        onSubmit: async (data, { setSubmitting, setFieldError }) => {
            await register(dispatch, data, navigate, setFieldError)
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <TextField
                    size="small"
                    label="Name"
                    error={ touched.name && Boolean(errors.name) }
                    helperText={ touched.name && errors.name }
                    { ...getFieldProps('name') }
                />
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
                <TextField
                    size="small"
                    label="Confirm Password"
                    type="password"
                    error={ touched.password_confirmation && Boolean(errors.password_confirmation) }
                    helperText={ touched.password_confirmation && errors.password_confirmation }
                    { ...getFieldProps('password_confirmation') }
                />
                <Typography variant='body1' textAlign='center'>
                    Do you have Account? <Button size='small' onClick={handleToggleForm}>Log In</Button>
                </Typography>
                <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                    startIcon={<BorderColorIcon/>}
                >
                    Register
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

export default RegisterForm