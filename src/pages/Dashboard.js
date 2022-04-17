import { Container, Grid } from "@mui/material"
import { green, red } from "@mui/material/colors"
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import MyDataGrid from "../components/DataGrid/DataGrid"

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
]
const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
]

const Dashboard = () => {

    return (
        <>
            <Header/>
            <Container maxWidth="xl">
                <Grid container spacing={2} marginY>
                    <Grid item xs={12}>
                        <PageTitle
                            icon={<DownloadIcon fontSize="large" color="success"/>}
                            text="Incomes"
                            textColor={green[600]}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyDataGrid
                            rows={rows}
                            columns={columns}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <PageTitle
                            icon={<UploadIcon fontSize="large" color="error"/>}
                            text="Expenses"
                            textColor={red[600]}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyDataGrid
                            rows={rows}
                            columns={columns}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Dashboard