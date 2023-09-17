

export default function fareBreakdownCalculator(formContext, taxiFareRule, fareBreakdownContext) {
    const paidKM = formContext.getContext().paidKM
    const paidMinutes = formContext.getContext().paidMinutes
    const additionalFare = formContext.getContext().additionalFare
    
    const initial2KMFare = taxiFareRule.initial2KMFare
    const subsequent200mOr1MinuteFare = taxiFareRule.subsequent200mOr1MinuteFare
    const subsequent200mOr1MinuteFareDiscounted = taxiFareRule.subsequent200mOr1MinuteFareDiscounted
    
    const discountThreshold = taxiFareRule.fareDiscountedThreshold

    fareBreakdownContext.refreshContext()
    fareBreakdownContext.setInitial2KMFare(initial2KMFare)
    fareBreakdownContext.setSubsequent200mOr1MinuteFare(subsequent200mOr1MinuteFare)
    fareBreakdownContext.setSubsequent200mOr1MinuteFareDiscounted(subsequent200mOr1MinuteFareDiscounted)
    
    fareBreakdownContext.setAdditionalFare(additionalFare)
    
    if (paidKM === 0) {
        return
    }

    fareBreakdownContext.setInitial2KMCounter(1)
    if (paidKM <= 2.0) {
        return
    }

    const paidKMIncrementCount = Math.floor((paidKM - 2) * 5)
    const paidMinutesIncrementCount = Math.floor(paidMinutes)

    let fareIncrementCount = paidKMIncrementCount + paidMinutesIncrementCount
    if (paidKMIncrementCount * 5 < paidKM || paidMinutesIncrementCount < paidMinutes) {
        fareIncrementCount += 1
    }

    const maxFareIncrementCountWithoutDiscount = Math.floor((discountThreshold - initial2KMFare) / subsequent200mOr1MinuteFare)

    if (fareIncrementCount <= maxFareIncrementCountWithoutDiscount) {
        fareBreakdownContext.setSubsequent200mOr1MinuteCounter(fareIncrementCount)
        return
    }

    fareBreakdownContext.setSubsequent200mOr1MinuteCounter(maxFareIncrementCountWithoutDiscount)
    fareBreakdownContext.setSubsequent200mOr1MinuteDiscountedCounter(fareIncrementCount - maxFareIncrementCountWithoutDiscount)
}