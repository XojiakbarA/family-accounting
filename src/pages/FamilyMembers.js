import { Container, Grid } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import MyDataGrid from "../components/DataGrid/DataGrid"
import MyDialog from '../components/Dialog'
import MemberForm from "../components/forms/MemberForm"
import { useEffect, useState } from "react"
import { createMember, deleteMember, editMember, getMembers } from "../context/asyncActions"
import { useStore } from "../hooks/useStore"
import { useDispatch } from "../hooks/useDispatch"
import Actions from "../components/DataGrid/Actions"
import { setMember } from "../context/actions"
import ConfirmDialog from "../components/dialogs/ConfirmDialog"

const FamilyMembers = () => {

    const dispatch = useDispatch()

    const members = useStore(store => store.members)
    const member = useStore(store => store.member)
    const loading = useStore(store => store.loading)

    const [{ add, edit, drop }, setOpen] = useState({ add: false, edit: false, drop: false })

    const addInitValues = {
        first_name: '',
        last_name: '',
        job: ''
    }
    const editInitValues = {
        first_name: member?.first_name,
        last_name: member?.last_name,
        job: member?.job
    }

    const handleOpenAddDialog = () => {
        setOpen(prev => ({ ...prev, add: true }))
    }
    const handleOpenEditDialog = (id) => {
        dispatch(setMember(id))
        setOpen(prev => ({ ...prev, edit: true }))
    }
    const handleOpenDeleteDialog =(id) => {
        dispatch(setMember(id))
        setOpen(prev => ({ ...prev, drop: true }))
    }
    const handleCloseDialog = () => {
        setOpen({ add: false, edit: false, drop: false })
        dispatch(setMember(null))
    }
    const handleCreateSumbit = (data, setFieldError) => {
        createMember(dispatch, data, handleCloseDialog, setFieldError)
    }
    const handleEditSumbit = (data, setFieldError) => {
        editMember(dispatch, member.id, data, handleCloseDialog, setFieldError)
    }
    const handleDeleteSubmit = () => {
        deleteMember(dispatch, member.id, handleCloseDialog)
    }

    useEffect(() => {
        getMembers(dispatch)
    }, [dispatch])

    const columns = [
        { field: 'id', headerName: 'ID', width: 75 },
        { field: 'first_name', headerName: 'First Name', width: 150 },
        { field: 'last_name', headerName: 'Last Name', width: 150 },
        { field: 'job', headerName: 'Job', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: ({ row }) => (
                <Actions
                    id={row.id}
                    handleEditClick={handleOpenEditDialog}
                    handleDeleteClick={handleOpenDeleteDialog}
                />
            )
        }
    ]
    

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
                            loading={loading}
                            hideFooterPagination
                            handleOpenDialog={handleOpenAddDialog}
                        />
                    </Grid>
                    <MyDialog
                        title="Add Member"
                        open={add}
                        onClose={handleCloseDialog}
                    >
                        <MemberForm
                            buttonText="Create"
                            buttonIcon={<AddIcon/>}
                            initialValues={addInitValues}
                            onSubmit={handleCreateSumbit}
                            handleCloseDialog={handleCloseDialog}
                        />
                    </MyDialog>
                    <MyDialog
                        title="Edit Member"
                        open={edit}
                        onClose={handleCloseDialog}
                    >
                        <MemberForm
                            buttonText="Edit"
                            buttonIcon={<EditIcon/>}
                            initialValues={editInitValues}
                            onSubmit={handleEditSumbit}
                            handleCloseDialog={handleCloseDialog}
                        />
                    </MyDialog>
                    <ConfirmDialog
                        title="Delete"
                        content="Are you sure you want to delete edit member?"
                        loading={loading}
                        open={drop}
                        onClose={handleCloseDialog}
                        handleConfirmClick={handleDeleteSubmit}
                    />
                </Grid>
            </Container>
        </>
    )
}

export default FamilyMembers