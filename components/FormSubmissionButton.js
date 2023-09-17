import { Button } from "@mui/material";


export default function FormSubmissionButton({ formSubmissionContext }) {
    const ctx = formSubmissionContext.getFormSubmissionButtonContext()
    return (
        <Button variant="outlined" onClick={ctx.onClick}>
            Calculate
        </Button>
    )
}