import { useState } from "react"
import { Avatar, Box, Container, Grid, Stack, Toolbar, Typography } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import TableChartIcon from '@mui/icons-material/TableChart'
import MyDialog from "../components/Dialog"
import LoginForm from "../components/forms/LoginForm"
import RegisterForm from "../components/forms/RegisterForm"
import { Link } from "react-router-dom"
import { useStore } from "../hooks/useStore"
import { useDispatch } from "../hooks/useDispatch"
import { logout } from "../context/asyncActions"
import { setAuthDialog } from "../context/actions"

const Home = () => {

    const dispatch = useDispatch()
    const user = useStore(store => store.user)
    const loading = useStore(store => store.loading)
    const authDialog = useStore(store => store.authDialog)

    const [isLoginForm, setIsLoginForm] = useState(true)

    const handleOpenDialog = () => {
        dispatch(setAuthDialog(true))
    }
    const handleCloseDialog = () => {
        dispatch(setAuthDialog(false))
    }
    const handleToggleForm = () => {
        setIsLoginForm(prev => !prev)
    }
    const handleLogout = () => {
        logout(dispatch)
    }

    return (
        <Container>
            <Toolbar/>
            <Grid container>
                <Grid item xs={6}>
                    <Box
                        component="img"
                        src="/images/accounting.png"
                        alt="banner-img"
                        width={"100%"}
                    />
                </Grid>
                <Grid item xs={6} display="flex" alignItems="center">
                    <Typography
                        align="center"
                        variant="h3"
                    >
                        Online service for keeping track of family expenses and incomes and personal finances
                    </Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    {
                        user
                        ?
                        <Stack spacing={2} alignItems="center">
                            <Stack spacing={1} alignItems="center">
                                <Avatar sx={{ width: 70, height: 70 }}/>
                                <Typography>{user?.name}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <LoadingButton
                                    variant="contained"
                                    component={Link}
                                    to="/dashboard"
                                    loading={loading}
                                    startIcon={<TableChartIcon/>}
                                >
                                    Dashboard
                                </LoadingButton>
                                <LoadingButton
                                    variant="outlined"
                                    onClick={handleLogout}
                                    loading={loading}
                                    startIcon={<LogoutIcon/>}
                                >
                                    Logout
                                </LoadingButton>
                            </Stack>
                        </Stack>
                        :
                        <LoadingButton
                            variant="contained"
                            onClick={handleOpenDialog}
                            loading={loading}
                            startIcon={<LoginIcon/>}
                        >
                            Login
                        </LoadingButton>
                        }
                </Grid>
            </Grid>
            <MyDialog
                title={ isLoginForm ? 'Login' : 'Register' }
                open={authDialog}
                onClose={handleCloseDialog}
            >
                {
                    isLoginForm
                    ?
                    <LoginForm
                        handleCloseDialog={handleCloseDialog}
                        handleToggleForm={handleToggleForm}
                    />
                    :
                    <RegisterForm
                        handleCloseDialog={handleCloseDialog}
                        handleToggleForm={handleToggleForm}
                    />
                }
            </MyDialog>
        </Container>
    )
}

export default Home