import { Box, IconButton, Tooltip } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const Actions = ({ id, handleEditClick, handleDeleteClick }) => {

    return (
        <Box
            width="100%"
            display="flex"
            justifyContent="space-around"
        >
            <Tooltip title="Edit">
                <IconButton
                    size="small"
                    onClick={ () => handleEditClick(id) }
                >
                    <EditIcon fontSize="small"/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton
                    size="small"
                    onClick={ () => handleDeleteClick(id) }
                >
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default Actions