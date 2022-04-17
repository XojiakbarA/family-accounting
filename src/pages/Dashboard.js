import { Container, Stack, Typography } from "@mui/material"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import { green } from "@mui/material/colors"
import Header from "../components/Header"


const Dashboard = () => {

    return (
        <>
            <Header/>
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" spacing={1}>
                    <DownloadForOfflineIcon fontSize="large" color="success"/>
                    <Typography variant="h3" color={green[600]}>Incomes</Typography>
                </Stack>
            </Container>
        </>
    )
}

export default Dashboard