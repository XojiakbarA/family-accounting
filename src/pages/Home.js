import { Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import MyDialog from "../components/Dialog"
import LoginForm from "../components/forms/LoginForm"
import RegisterForm from "../components/forms/RegisterForm"

const Home = () => {

    const [open, setOpen] = useState(false)
    const [isLoginForm, setIsLoginForm] = useState(true)

    const handleOpenDialog = () => {
        setOpen(true)
    }
    const handleCloseDialog = () => {
        setOpen(false)
    }
    const handleToggleForm = () => {
        setIsLoginForm(prev => !prev)
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
                    <Button
                        variant="contained"
                        onClick={handleOpenDialog}
                    >
                        Get Started
                    </Button>
                </Grid>
            </Grid>
            <MyDialog
                title={ isLoginForm ? 'Login' : 'Register' }
                open={open}
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