import { Button } from "@mui/material"
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid"
import AddIcon from '@mui/icons-material/Add'


const MyToolbar = ({ onAddClick }) => {

    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton/>
            <GridToolbarFilterButton/>
            <GridToolbarDensitySelector/>
            <GridToolbarExport/>
            {
                onAddClick
                ?
                <Button
                    size="small"
                    startIcon={<AddIcon/>}
                    onClick={onAddClick}
                >
                    Add Member
                </Button>
                :
                null
            }
        </GridToolbarContainer>
    )
}

export default MyToolbar