import { Paper } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import MyLoadingOverlay from "./LoadingOverlay"
import MyNoRowsOverlay from "./MyNoRowsOverlay"
import MyToolbar from "./Toolbar"

const MyDataGrid = ({ rows, columns, loading, hideFooterPagination, handleOpenDialog }) => {

    return (
        <Paper>
            <DataGrid
                autoHeight
                disableColumnMenu
                loading={loading}
                hideFooterPagination={hideFooterPagination}
                rows={rows}
                columns={columns}
                components={{
                    Toolbar: MyToolbar,
                    LoadingOverlay: MyLoadingOverlay,
                    NoRowsOverlay: MyNoRowsOverlay
                }}
                componentsProps={{
                    filterPanel: {
                        filterFormProps: {
                            operatorInputProps: {
                                sx: { display: 'none' }
                            }
                        }
                    },
                    toolbar: {onAddMemberClick: handleOpenDialog},
                    loadingOverlay: {  }
                }}
            />
        </Paper>
    )
}

export default MyDataGrid