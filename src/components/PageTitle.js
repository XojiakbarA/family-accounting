import { Stack, Typography } from "@mui/material"

const PageTitle = ({ icon, text, textColor, ...others }) => {

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            { ...others }
        >
            {icon}
            <Typography variant="h4" color={textColor}>{text}</Typography>
        </Stack>
    )
}

export default PageTitle