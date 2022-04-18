import { Button, Stack, TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from "formik"
import { useStore } from '../../hooks/useStore'
import { memberValidationSchema } from "../../utils/validate"

const MemberForm = ({ buttonText, buttonIcon, initialValues, onSubmit, handleCloseDialog }) => {

    const loading = useStore(store => store.loading)

    const { handleSubmit, getFieldProps, touched, errors } = useFormik({
        initialValues,
        validationSchema: memberValidationSchema,
        onSubmit: onSubmit
    })

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} alignItems="center">
                <TextField
                    fullWidth
                    size="small"
                    label="First Name"
                    error={ touched.first_name && Boolean(errors.first_name) }
                    helperText={ touched.first_name && errors.first_name }
                    { ...getFieldProps('first_name') }
                />
                <TextField
                    fullWidth
                    size="small"
                    label="Last Name"
                    error={ touched.last_name && Boolean(errors.last_name) }
                    helperText={ touched.last_name && errors.last_name }
                    { ...getFieldProps('last_name') }
                />
                <TextField
                    fullWidth
                    size="small"
                    label="Job"
                    error={ touched.job && Boolean(errors.job) }
                    helperText={ touched.job && errors.job }
                    { ...getFieldProps('job') }
                />
                <Stack direction="row" spacing={2}>
                    <LoadingButton
                        variant="contained"
                        type="sumbit"
                        loading={loading}
                        startIcon={buttonIcon}
                    >
                        {buttonText}
                    </LoadingButton>
                    <Button
                        variant="outlined"
                        startIcon={<CloseIcon/>}
                        onClick={handleCloseDialog}
                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}

export default MemberForm