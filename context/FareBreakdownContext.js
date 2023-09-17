const { useState } = require("react");

export default function createDefaultFareBreakdownContext() {
    const [fareBreakdownContext, setFareBreakdownContext] = useState({
        initial2KMCounter: 0,
        initial2KMFare: 0,
        subsequent200mOr1MinuteCounter: 0,
        subsequent200mOr1MinuteFare: 0,
        subsequent200mOr1MinuteDiscountedCounter: 0,
        subsequent200mOr1MinuteFareDiscounted: 0,
        additionalFare: 0
    })

    return {
        fareBreakdownContext: fareBreakdownContext,
        setFareBreakdownContext: setFareBreakdownContext,

        setInitial2KMCounter: function (x) {
            if (x !== 0 && x !== 1) {
                throw new Error('initial2KMCounter must be set with either 0 or 1')
            }
            this.setFareBreakdownContext(ctx => ({ ...ctx, ['initial2KMCounter']: x}))
        },

        setInitial2KMFare: function (x) {
            this.setFareBreakdownContext(ctx => ({ ...ctx, ['initial2KMFare']: x}))
        },

        setSubsequent200mOr1MinuteCounter: function (x) {
            this.setFareBreakdownContext(ctx => ({ ...ctx, ['subsequent200mOr1MinuteCounter']: x}))
        },

        setSubsequent200mOr1MinuteFare: function (x) {
            this.setFareBreakdownContext(ctx => ({ ...ctx, ['subsequent200mOr1MinuteFare']: x}))
        },

        setSubsequent200mOr1MinuteDiscountedCounter: function (x) {
            this.setFareBreakdownContext(ctx => ({ ...ctx, ['subsequent200mOr1MinuteDiscountedCounter']: x}))
        },

        setSubsequent200mOr1MinuteFareDiscounted: function (x) {
            this.setFareBreakdownContext(ctx => ({ ...ctx, ['subsequent200mOr1MinuteFareDiscounted']: x}))
        },

        setAdditionalFare: function (x) {
            this.setFareBreakdownContext(ctx => ({ ...ctx, ['additionalFare']: x}))
        },

        getFareBreakdownContext: function () {
            return this.fareBreakdownContext
        },

        refreshContext: function () {
            this.setInitial2KMCounter(0)
            this.setInitial2KMFare(0)
            this.setSubsequent200mOr1MinuteCounter(0)
            this.setSubsequent200mOr1MinuteFare(0)
            this.setSubsequent200mOr1MinuteDiscountedCounter(0)
            this.setSubsequent200mOr1MinuteFareDiscounted(0)
            this.setAdditionalFare(0)
        }
    }
}