import { useState } from "react"
import { AppBar, Box, Toolbar, Container, Button } from "@mui/material"
import PaidIcon from '@mui/icons-material/Paid'
import AddIcon from '@mui/icons-material/Add'
import { Link } from "react-router-dom"
import MyDialog from "./Dialog"
import FinanceForm from "./forms/FinanceForm"
import ProfileForm from "./forms/ProfileForm"
import ProfileMenu from "./ProfileMenu"
import { useDispatch } from "../hooks/useDispatch"
import { createFinance } from "../context/asyncActions"

const Header = () => {

    const dispatch = useDispatch()

    const [{ amount, editProfile }, setOpen] = useState({ amount: false, editProfile: false })
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenAmountDialog = () => {
        setOpen(prev => ({ ...prev, amount: true }))
    }
    const handleOpenEditProfileDialog = (handleCloseUserMenu) => {
        handleCloseUserMenu()
        setOpen(prev => ({ ...prev, editProfile: true }))
    }
    const handleCloseAmountDialog = () => {
        setOpen(prev => ({ ...prev, amount: false }))
    }
    const handleCloseEditProfileDialog = () => {
        setOpen(prev => ({ ...prev, editProfile: false }))
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const handleCreateSumbit = (data, { setFieldError }) => {
        createFinance(dispatch, data, handleCloseAmountDialog, setFieldError)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box flexGrow={0}>
                        <Button
                            color="inherit"
                            component={Link}
                            to='/'
                        >
                            Home
                        </Button>
                    </Box>
                    <Box flexGrow={0}>
                        <Button
                            color="inherit"
                            component={Link}
                            to='/dashboard'
                        >
                            Dashboard
                        </Button>
                    </Box>
                    <Box
                        flexGrow={1}
                        marginRight={5}
                        display="flex"
                        justifyContent="end"
                    >
                        <Button
                            color="inherit"
                            startIcon={<PaidIcon/>}
                            onClick={handleOpenAmountDialog}
                        >
                            Add Finance
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <ProfileMenu
                            anchorEl={anchorElUser}
                            handleOpenMenu={handleOpenUserMenu}
                            handleCloseMenu={handleCloseUserMenu}
                            handleOpenEditProfileDialog={handleOpenEditProfileDialog}
                        />
                    </Box>
                    <MyDialog
                        title="Add Amount"
                        open={amount}
                        onClose={handleCloseAmountDialog}
                    >
                        <FinanceForm
                            buttonText="Add"
                            buttonIcon={<AddIcon/>}
                            onSubmit={handleCreateSumbit}
                            handleCloseDialog={handleCloseAmountDialog}
                        />
                    </MyDialog>
                    <MyDialog
                        title="Edit Profile"
                        open={editProfile}
                        onClose={handleCloseEditProfileDialog}
                    >
                        <ProfileForm handleCloseDialog={handleCloseEditProfileDialog}/>
                    </MyDialog>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
