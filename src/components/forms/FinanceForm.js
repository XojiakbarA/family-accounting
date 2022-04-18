import { Button, CircularProgress, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import CloseIcon from '@mui/icons-material/Close'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import AutocompleteInput from "../AutocompleteInput"
import { useEffect, useState } from "react"
import { useStore } from "../../hooks/useStore"
import { getCategories, getMembers, getSubCategories } from "../../context/asyncActions"
import { useDispatch } from "../../hooks/useDispatch"
import { useFormik } from "formik"
import { financeValidationSchema } from '../../utils/validate'

const FinanceForm = ({ finance, onSubmit, buttonText, buttonIcon, handleCloseDialog }) => {

    const dispatch = useDispatch()

    const categories = useStore(store => store.categories)
    const subCategories = useStore(store => store.subCategories)
    const members = useStore(store => store.members)
    const loading = useStore(store => store.loading)

    const [ subCategory, setSubCategory ] = useState(null)
    const [member, setMember] = useState(null)

    const { handleSubmit, getFieldProps, setValues, touched, errors, values } = useFormik({
        initialValues: {
            category_id: finance?.category?.id ?? '',
            sub_category_id: finance?.sub_category?.id ?? '',
            member_id: finance?.member?.id ?? '',
            amount: finance?.amount ?? '',
            comment: finance?.comment ?? ''
        },
        validationSchema: financeValidationSchema,
        onSubmit,
        enableReinitialize: true
    })

    const handleCategoryChange = (e, value) => {
        setSubCategory(null)
        setValues(prev => ({ ...prev, category_id: value }))
        getSubCategories(dispatch, value)
    }
    const handleSubCategoryChange = (e, value) => {
        setSubCategory(value)
        setValues(prev => ({ ...prev, sub_category_id: value?.id ?? ''  }))
    }
    const handleMemberChange = (e, value) => {
        setMember(value)
        setValues(prev => ({ ...prev, member_id: value?.id ?? ''  }))
    }

    useEffect(() => {
        getCategories(dispatch)
        if (values.category_id) {
            getSubCategories(dispatch, values.category_id)
        }
        getMembers(dispatch)
    }, [dispatch, values.category_id])

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <FormControl error={touched.category_id && Boolean(errors.category_id)}>
                    <FormLabel id="category-label">Category</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="category-label"
                        { ...getFieldProps('category_id') }
                        onChange={handleCategoryChange}
                    >
                        {
                            categories.length
                            ?
                            categories.map(category => (
                                <FormControlLabel
                                    key={category.id}
                                    label={
                                        <Stack direction="row" alignItems="center">
                                            {
                                                category.title === 'Incomes'
                                                ?
                                                <DownloadIcon fontSize="small" color="success"/>
                                                :
                                                <UploadIcon fontSize="small" color="error"/>
                                            }
                                            <Typography variant="body2">{category.title}</Typography>
                                        </Stack>
                                    }
                                    
                                    value={category.id}
                                    control={<Radio />}
                                />
                            ))
                            :
                            <CircularProgress/>
                        }
                    </RadioGroup>
                    <FormHelperText>{touched.category_id && errors.category_id}</FormHelperText>
                </FormControl>
                <AutocompleteInput
                    label="Sub Category"
                    getOptionLabel={option => option.title}
                    error={touched.sub_category_id && Boolean(errors.sub_category_id)}
                    helperText={touched.sub_category_id && errors.sub_category_id}
                    loading={loading}
                    disabled={loading || !values.category_id}
                    options={subCategories}
                    option={subCategory}
                    handleChange={handleSubCategoryChange}
                />
                <AutocompleteInput
                    label="Family Member"
                    getOptionLabel={option => option.first_name}
                    error={touched.member_id && Boolean(errors.member_id)}
                    helperText={touched.member_id && errors.member_id}
                    loading={loading}
                    disabled={loading}
                    options={members}
                    option={member}
                    handleChange={handleMemberChange}
                />
                <TextField
                    size="small"
                    label="Amount"
                    error={touched.amount && Boolean(errors.amount)}
                    helperText={touched.amount && errors.amount}
                    { ...getFieldProps('amount') }
                />
                <TextField
                    size="small"
                    label="Comment"
                    multiline
                    rows={4}
                    fullWidth
                    { ...getFieldProps('comment') }
                />
                <Stack direction="row" spacing={2}>
                    <LoadingButton
                        fullWidth
                        variant="contained"
                        type="submit"
                        loading={loading}
                        startIcon={buttonIcon}
                    >
                        {buttonText}
                    </LoadingButton>
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
        </form>
    )
}

export default FinanceForm