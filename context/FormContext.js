const { useState } = require("react");

export default function createDefaultFormContext() {
    const [formContext, setFormContext] = useState({
        paidKM: 0.0,
        paidMinutes: 0.0,
        additionalFare: 0.0,
    })

    let ctx = {
        formContext: formContext,
        setFormContext: setFormContext,
        setPaidKM: function (x) {
            this.setFormContext(ctx => ({ ...ctx, ['paidKM']: x}))
        },

        setPaidMinutes: function (x) {
           this.setFormContext(ctx => ({ ...ctx, ['paidMinutes']: x}))
        },

        setAdditionalFare: function (x) {
           this.setFormContext(ctx => ({ ...ctx, ['additionalFare']: x}))
        },

        getContext: function () {
            return this.formContext
        }
    }

    return ctx
}