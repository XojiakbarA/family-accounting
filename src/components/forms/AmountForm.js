import { useState } from "react"
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import AutocompleteInput from "../AutocompleteInput"

const subCategories = [
    { id: 1, title: 'asd' },
    { id: 2, title: 'qwe' },
    { id: 3, title: 'zxc' },
]
const members = [
    { id: 1, name: 'rty' },
    { id: 2, name: 'fgh' },
    { id: 3, name: 'vbn' },
]

const AmountForm = ({ handleCloseDialog }) => {

    const [ category, setCategory ] = useState(null)
    const [member, setMember] = useState(null)

    const handleCategoryChange = (e, value) => {
        setCategory(value)
    }
    const handleMemberChange = (e, value) => {
        setMember(value)
    }

    return (
        <Stack spacing={2}>
            <FormControl>
                <FormLabel id="category-label">Category</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="category-label"
                    name="category"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Incomes" />
                    <FormControlLabel value="male" control={<Radio />} label="Expenses" />
                </RadioGroup>
            </FormControl>
            <AutocompleteInput
                label="Sub Category"
                getOptionLabel={option => option.title}
                options={subCategories}
                option={category}
                handleChange={handleCategoryChange}
            />
            <AutocompleteInput
                label="Family Member"
                getOptionLabel={option => option.name}
                options={members}
                option={member}
                handleChange={handleMemberChange}
            />
            <TextField
                size="small"
                label="Amount"
            />
            <TextField
                size="small"
                label="Comment"
                multiline
                rows={4}
                fullWidth
            />
            <Stack direction="row" spacing={2}>
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<AddIcon/>}
                >
                    Add
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<CloseIcon/>}
                    onClick={handleCloseDialog}
                >
                    Cancel
                </Button>
            </Stack>
        </Stack>
    )
}

export default AmountForm