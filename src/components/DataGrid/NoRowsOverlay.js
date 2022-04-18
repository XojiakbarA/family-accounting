import { Box, Stack, Typography } from "@mui/material"

const MyNoRowsOverlay = ({ icon, text }) => {

    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Stack alignItems="center" spacing={1}>
                {icon}
                <Typography variant="body2">{text}</Typography>
            </Stack>
        </Box>
    )
}

export default MyNoRowsOverlay