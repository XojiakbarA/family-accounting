import { Container, Grid } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group'
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import MyDataGrid from "../components/DataGrid/DataGrid"
import MyDialog from '../components/Dialog'
import MemberForm from "../components/forms/MemberForm"
import { useEffect, useState } from "react"
import { getMembers } from "../context/asyncActions"
import { useStore } from "../hooks/useStore"
import { useDispatch } from "../hooks/useDispatch"

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'first_name', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last Name', width: 150 },
    { field: 'job', headerName: 'Job', width: 150 },
]

const FamilyMembers = () => {

    const dispatch = useDispatch()

    const members = useStore(store => store.members)

    const [open, setOpen] = useState(false)

    const handleOpenDialog = () => {
        setOpen(true)
    }
    const handleCloseDialog = () => {
        setOpen(false)
    }

    useEffect(() => {
        getMembers(dispatch)
    }, [dispatch])

    return (
        <>
            <Header/>
            <Container maxWidth="xl">
                <Grid container spacing={2} marginY>
                    <Grid item xs={12}>
                        <PageTitle
                            icon={<GroupIcon fontSize="large" color="primary"/>}
                            text="Family Members"
                            textColor="primary"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyDataGrid
                            rows={members}
                            columns={columns}
                            hideFooterPagination
                            handleOpenDialog={handleOpenDialog}
                        />
                    </Grid>
                    <MyDialog
                        title="Add Member"
                        open={open}
                        onClose={handleCloseDialog}
                    >
                        <MemberForm handleCloseDialog={handleCloseDialog}/>
            </MyDialog>
                </Grid>
            </Container>
        </>
    )
}

export default FamilyMembers