
export default function createDefaultFormSubmissionButtonContext() {
    const formSubmissionButtonContext = {
        onClick: null
    }

    return {
        formSubmissionButtonContext: formSubmissionButtonContext,

        setOnClick: function (f) {
            this.formSubmissionButtonContext['onClick'] = f
        },

        getFormSubmissionButtonContext: function () {
            return this.formSubmissionButtonContext
        }
    }
}