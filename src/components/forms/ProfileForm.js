import { Button, Stack, TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import AvatarUpload from "../AvatarUpload/AvatarUpload"
import { useSinglePreview } from "../../hooks/useSinglePreview"

const ProfileForm = ({ handleCloseDialog }) => {

    const setValues = () => {}

    const { preview, handleUploadChange, handlePreviewDeleteClick } = useSinglePreview(setValues)

    return (
        <Stack spacing={2}>
            <AvatarUpload
                alignSelf="center"
                handlePrewiewDeleteClick={handlePreviewDeleteClick}
                handleUploadChange={handleUploadChange}
                name='image'
                preview={preview}
                size={60}
            />
            <TextField
                size="small"
                label="Name"
            />
            <Stack direction="row" spacing={2}>
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<SaveIcon/>}
                >
                    Save
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<CloseIcon/>}
                    onClick={handleCloseDialog}
                >
                    Cancel
                </Button>
            </Stack>
        </Stack>
    )
}

export default ProfileForm