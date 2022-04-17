import { LinearProgress, Paper } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

const MyDataGrid = ({ rows, columns }) => {

    return (
        <Paper>
            <DataGrid
                autoHeight
                disableColumnMenu
                rows={rows}
                columns={columns}
                components={{
                    Toolbar: GridToolbar,
                    LoadingOverlay: LinearProgress
                }}
                componentsProps={{
                    filterPanel: {
                        filterFormProps: {
                            operatorInputProps: {
                                sx: { display: 'none' }
                            }
                        }
                    }
                }}
            />
        </Paper>
    )
}

export default MyDataGrid