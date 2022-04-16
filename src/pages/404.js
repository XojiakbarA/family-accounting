import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const Page404 = () => {

    return (
        <Box
            width='100%'
            height='100vh'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Stack spacing={2}>
                <Stack
                    direction='row'
                    alignItems='center'
                    spacing={2}
                    divider={<Divider orientation='vertical' flexItem/>}
                >
                    <Typography variant='h6'>404</Typography>
                    <Typography variant='body2'>This page could not be found.</Typography>
                </Stack>
                <Button
                    variant='outlined'
                    size='small'
                    to='/'
                    component={Link}
                >Go Home</Button>
            </Stack>
        </Box>
    )
}

export default Page404