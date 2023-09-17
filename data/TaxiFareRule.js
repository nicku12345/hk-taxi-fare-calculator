
function createTaxiFareRule({
    initial2KMFare,
    subsequent200mOr1MinuteFare,
    subsequent200mOr1MinuteFareDiscounted,
    fareDiscountedThreshold,
    perPackageFare,
    perWheelChairFare,
    perAnimalFare,
    perCallServiceFare,
    perCrossHarbourTunnelSingleTripFare,
    perCrossHarbourTunnelDoubleTripFare

}) {
    return {
        initial2KMFare: initial2KMFare,
        subsequent200mOr1MinuteFare: subsequent200mOr1MinuteFare,
        subsequent200mOr1MinuteFareDiscounted: subsequent200mOr1MinuteFareDiscounted,
        fareDiscountedThreshold: fareDiscountedThreshold,

        perPackageFare: perPackageFare,
        perWheelChairFare: perWheelChairFare,
        perAnimalFare: perAnimalFare,
        perCallServiceFare: perCallServiceFare,

        perCrossHarbourTunnelSingleTripFare: perCrossHarbourTunnelSingleTripFare,
        perCrossHarbourTunnelDoubleTripFare: perCrossHarbourTunnelDoubleTripFare
    }
}

const HongKongTaxiFareRule = {
    UrbanTaxi: createTaxiFareRule({
        initial2KMFare: 27.0,
        subsequent200mOr1MinuteFare: 1.9,
        subsequent200mOr1MinuteFareDiscounted: 1.3,
        fareDiscountedThreshold: 93.5,
        perPackageFare: 6.0,
        perWheelChairFare: 0.0,
        perAnimalFare: 5.0,
        perCallServiceFare: 5.0,
        perCrossHarbourTunnelSingleTripFare: 25.0,
        perCrossHarbourTunnelDoubleTripFare: 50.0,
    }),

    NewTerritoriesTaxi: createTaxiFareRule({
        initial2KMFare: 23.5,
        subsequent200mOr1MinuteFare: 1.7,
        subsequent200mOr1MinuteFareDiscounted: 1.3,
        fareDiscountedThreshold: 74.5,
        perPackageFare: 6.0,
        perWheelChairFare: 0.0,
        perAnimalFare: 5.0,
        perCallServiceFare: 5.0,
        perCrossHarbourTunnelSingleTripFare: null,  // New Territories Taxi cannot cross tunnel
        perCrossHarbourTunnelDoubleTripFare: null,  // New Territories Taxi cannot cross tunnel
    }),

    LantauTaxi: createTaxiFareRule({
        initial2KMFare: 22.0,
        subsequent200mOr1MinuteFare: 1.7,
        subsequent200mOr1MinuteFareDiscounted: 1.5,
        fareDiscountedThreshold: 175.0,
        perPackageFare: 6.0,
        perWheelChairFare: 0.0,
        perAnimalFare: 5.0,
        perCallServiceFare: 5.0,
        perCrossHarbourTunnelSingleTripFare: null,  // Lantau Taxi cannot cross tunnel
        perCrossHarbourTunnelDoubleTripFare: null,  // Lantau Taxi cannot cross tunnel
    })
}

export default HongKongTaxiFareRule