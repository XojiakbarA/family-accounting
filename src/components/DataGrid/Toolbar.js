import { Button } from "@mui/material"
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid"
import AddIcon from '@mui/icons-material/Add'


const MyToolbar = ({ onAddMemberClick }) => {

    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton/>
            <GridToolbarFilterButton/>
            <GridToolbarDensitySelector/>
            <GridToolbarExport/>
            <Button
                size="small"
                startIcon={<AddIcon/>}
                onClick={onAddMemberClick}
            >
                Add Member
            </Button>
        </GridToolbarContainer>
    )
}

export default MyToolbar