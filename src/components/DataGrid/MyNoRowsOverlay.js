import { Box, Stack, Typography } from "@mui/material"
import PersonOffIcon from '@mui/icons-material/PersonOff'

const MyNoRowsOverlay = () => {

    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Stack alignItems="center" spacing={1}>
                <PersonOffIcon fontSize="large" color="disabled"/>
                <Typography variant="body2">No Family Members</Typography>
            </Stack>
        </Box>
    )
}

export default MyNoRowsOverlay