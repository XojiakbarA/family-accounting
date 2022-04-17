import { IconButton, Typography, Menu, Avatar, Tooltip, MenuItem, CircularProgress } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link, useNavigate } from "react-router-dom"
import { useStore } from "../hooks/useStore"
import { logout } from "../context/asyncActions"
import { useDispatch } from "../hooks/useDispatch"

const ProfileMenu = ({ anchorEl, handleOpenMenu, handleCloseMenu, handleOpenEditProfileDialog }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useStore(store => store.user)
    const loading = useStore(store => store.loading)

    const menu = [
        {
            title: 'Edit Profile',
            icon: <EditIcon fontSize="small"/>,
            onClick: () => handleOpenEditProfileDialog(handleCloseMenu)
        },
        {
            title: 'Family Members',
            icon: <GroupIcon fontSize="small"/>,
            onClick: handleCloseMenu,
            component: Link,
            href: '/family-members'
        },
        {
            title: 'Logout',
            icon: loading ? <CircularProgress size={20}/> : <LogoutIcon fontSize="small"/>,
            onClick: () => logout(dispatch, navigate, handleCloseMenu)
        }
    ]

    return (
        <>
            <Tooltip title="Profile Menu">
                <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                    <Avatar alt={user?.name} src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
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
        </>
    )
}

export default ProfileMenu