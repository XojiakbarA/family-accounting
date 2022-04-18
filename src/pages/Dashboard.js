import { Container, Grid } from "@mui/material"
import { green, red } from "@mui/material/colors"
import EditIcon from '@mui/icons-material/Edit'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import MyDataGrid from "../components/DataGrid/DataGrid"
import Actions from "../components/DataGrid/Actions"
import GridCellExpand from "../components/DataGrid/GridCellExpand"
import MyDialog from "../components/Dialog"
import FinanceForm from "../components/forms/FinanceForm"
import ConfirmDialog from "../components/dialogs/ConfirmDialog"
import { useStore } from "../hooks/useStore"
import { useEffect, useState } from "react"
import { deleteFinance, editFinance, getFinances } from "../context/asyncActions"
import { useDispatch } from "../hooks/useDispatch"
import { setFinance } from "../context/actions"

const Dashboard = () => {

    const dispatch = useDispatch()

    const finance = useStore(store => store.finance)
    const incomes = useStore(store => store.finances.filter(item => item.category.title === 'Incomes'))
    const expenses = useStore(store => store.finances.filter(item => item.category.title === 'Expenses'))
    const loading = useStore(store => store.loading)

    const [{ edit, drop }, setOpen] = useState({ edit: false, drop: false })

    const handleOpenEditDialog = (id) => {
        dispatch(setFinance(id))
        setOpen(prev => ({ ...prev, edit: true }))
    }
    const handleOpenDeleteDialog =(id) => {
        dispatch(setFinance(id))
        setOpen(prev => ({ ...prev, drop: true }))
    }
    const handleCloseDialog = () => {
        setOpen({ edit: false, drop: false })
        dispatch(setFinance(null))
    }
    const handleDeleteSubmit = () => {
        deleteFinance(dispatch, finance.id, handleCloseDialog)
    }
    const handleEditSumbit = (data, { setFieldError }) => {
        editFinance(dispatch, finance.id, data, handleCloseDialog, setFieldError)
    }

    useEffect(() => {
        getFinances(dispatch)
    }, [dispatch])

    const columns = [
        { field: 'id', headerName: 'ID', width: 75 },
        {
            field: 'sub_category',
            headerName: 'Sub Category',
            width: 150,
            valueGetter: ({ row }) => row.sub_category.title
        },
        {
            field: 'member',
            headerName: 'Family Member',
            width: 175,
            valueGetter: ({ row }) => row.member.first_name + ' ' + row.member.last_name
        },
        { 
            field: 'amount',
            headerName: 'Amount',
            width: 150
        },
        {
            field: 'comment',
            headerName: 'Comment',
            width: 150,
            renderCell: ({ value, colDef }) => (
                <GridCellExpand
                    value={value}
                    width={colDef.computedWidth}
                />
            )
        },
        { field: 'created_at', headerName: 'Created At', width: 150 },
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
                            icon={<DownloadIcon fontSize="large" color="success"/>}
                            text="Incomes"
                            textColor={green[600]}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyDataGrid
                            rows={incomes}
                            columns={columns}
                            loading={loading}
                            noRowsOverlayProps={{
                                icon: <DownloadIcon color="disabled" fontSize="large"/>,
                                text: 'No Incomes'
                            }}
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
                            rows={expenses}
                            columns={columns}
                            loading={loading}
                            noRowsOverlayProps={{
                                icon: <UploadIcon color="disabled" fontSize="large"/>,
                                text: 'No Expenses'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <MyDialog
                title="Edit Finance"
                open={edit}
                onClose={handleCloseDialog}
            >
                <FinanceForm
                    buttonText="Edit"
                    buttonIcon={<EditIcon/>}
                    finance={finance}
                    onSubmit={handleEditSumbit}
                    handleCloseDialog={handleCloseDialog}
                />
            </MyDialog>
            <ConfirmDialog
                title="Delete"
                content="do you really want to delete this finance?"
                loading={loading}
                open={drop}
                onClose={handleCloseDialog}
                handleConfirmClick={handleDeleteSubmit}
            />
        </>
    )
}

export default Dashboard