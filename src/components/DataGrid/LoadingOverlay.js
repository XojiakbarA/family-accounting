import { Box, CircularProgress } from "@mui/material"


const MyLoadingOverlay = () => {

    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress/>
        </Box>
    )
}

export default MyLoadingOverlay