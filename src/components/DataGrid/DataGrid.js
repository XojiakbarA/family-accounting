import { LinearProgress, Paper } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import MyToolbar from "./Toolbar"

const MyDataGrid = ({ rows, columns, hideFooterPagination, handleOpenDialog }) => {

    return (
        <Paper>
            <DataGrid
                autoHeight
                disableColumnMenu
                hideFooterPagination={hideFooterPagination}
                rows={rows}
                columns={columns}
                components={{
                    Toolbar: MyToolbar,
                    LoadingOverlay: LinearProgress
                }}
                componentsProps={{
                    filterPanel: {
                        filterFormProps: {
                            operatorInputProps: {
                                sx: { display: 'none' }
                            }
                        }
                    },
                    toolbar: {onAddMemberClick: handleOpenDialog}
                }}
            />
        </Paper>
    )
}

export default MyDataGrid