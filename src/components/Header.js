import { useState } from "react"
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material"
import PaidIcon from '@mui/icons-material/Paid'
import EditIcon from '@mui/icons-material/Edit'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from "react-router-dom"
import MyDialog from "./Dialog"
import AmountForm from "./forms/AmountForm"
import ProfileForm from "./forms/ProfileForm"

const Header = () => {

    const [{ amount, editProfile }, setOpen] = useState({ amount: false, editProfile: false })
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenAmountDialog = () => {
        setOpen(prev => ({ ...prev, amount: true }))
    }
    const handleOpenEditProfileDialog = () => {
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

    const menu = [
        {
            title: 'Edit Profile',
            icon: <EditIcon fontSize="small"/>,
            onClick: () => {
                handleCloseUserMenu()
                handleOpenEditProfileDialog()
            }
        },
        {
            title: 'Family Members',
            icon: <GroupIcon fontSize="small"/>,
            onClick: handleCloseUserMenu,
            component: Link,
            href: '/family-members'
        },
        {
            title: 'Logout',
            icon: <LogoutIcon fontSize="small"/>,
            onClick: handleCloseUserMenu
        }
    ]

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
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
                            Add Amount
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profile Menu">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                menu.map(({ title, icon, component, href, onClick }) => (
                                    <MenuItem
                                        key={title}
                                        onClick={onClick}
                                        component={component}
                                        to={href}
                                    >
                                        {icon}
                                        <Typography marginLeft={1}>{title}</Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                    <MyDialog
                        title="Add Amount"
                        open={amount}
                        onClose={handleCloseAmountDialog}
                    >
                        <AmountForm handleCloseDialog={handleCloseAmountDialog}/>
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
