import { Box, MenuItem, Select, TextField } from "@mui/material";

export default function Form({ formContext }) {
    const handlePaidKMOnChange = (val) => {
        formContext.setPaidKM(parseFloat(val))
    }

    const handlePaidMinutesOnChange = (val) => {
        formContext.setPaidMinutes(parseFloat(val))
    }

    const handleAdditionalFareOnChange = (val) => {
        formContext.setAdditionalFare(parseFloat(val))
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'space-between'
            }}
            gap="10px"
        >
            <TextField 
                id="paidKM"
                label="Paid Kilometers"
                type="number"
                InputProps={{ inputProps: { min: 0.0, step: 0.01 }}}
                onChange={(e) => handlePaidKMOnChange(e.target.value)}
            />

            <TextField 
                id="paidMinutes"
                label="Paid Minutes"
                type="number"
                InputProps={{ inputProps: { min: 0.0, step: 0.01 }}}
                onChange={(e) => handlePaidMinutesOnChange(e.target.value)}
            />

            <TextField 
                id="additionalFare"
                label="Additional Fare"
                type="number"
                InputProps={{ inputProps: { min: 0.0, step: 1.0 }}}
                onChange={(e) => handleAdditionalFareOnChange(e.target.value)}
            />

        </Box>
    )
}