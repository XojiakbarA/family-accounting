import { Paper } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import MyLoadingOverlay from "./LoadingOverlay"
import MyNoRowsOverlay from "./NoRowsOverlay"
import MyToolbar from "./Toolbar"

const MyDataGrid = ({
    rows, columns, loading, hideFooterPagination, handleOpenDialog,
    noRowsOverlayProps
}) => {

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
                    toolbar: { onAddClick: handleOpenDialog },
                    noRowsOverlay: { icon: noRowsOverlayProps.icon, text: noRowsOverlayProps.text }
                }}
            />
        </Paper>
    )
}

export default MyDataGrid