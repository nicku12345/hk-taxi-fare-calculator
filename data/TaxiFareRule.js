
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

// Before 2024-07-14
const HongKongTaxiFareRule_old = {
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

const HongKongTaxiFareRule_20240714 = {
    UrbanTaxi: createTaxiFareRule({
        initial2KMFare: 29.0,
        subsequent200mOr1MinuteFare: 2.1,
        subsequent200mOr1MinuteFareDiscounted: 1.4,
        fareDiscountedThreshold: 102.5,
        perPackageFare: 6.0,
        perWheelChairFare: 0.0,
        perAnimalFare: 5.0,
        perCallServiceFare: 5.0,
        perCrossHarbourTunnelSingleTripFare: 25.0,
        perCrossHarbourTunnelDoubleTripFare: 50.0,
    }),

    NewTerritoriesTaxi: createTaxiFareRule({
        initial2KMFare: 25.5,
        subsequent200mOr1MinuteFare: 1.9,
        subsequent200mOr1MinuteFareDiscounted: 1.4,
        fareDiscountedThreshold: 82.5,
        perPackageFare: 6.0,
        perWheelChairFare: 0.0,
        perAnimalFare: 5.0,
        perCallServiceFare: 5.0,
        perCrossHarbourTunnelSingleTripFare: null,  // New Territories Taxi cannot cross tunnel
        perCrossHarbourTunnelDoubleTripFare: null,  // New Territories Taxi cannot cross tunnel
    }),

    LantauTaxi: createTaxiFareRule({
        initial2KMFare: 24.0,
        subsequent200mOr1MinuteFare: 1.9,
        subsequent200mOr1MinuteFareDiscounted: 1.6,
        fareDiscountedThreshold: 195.0,
        perPackageFare: 6.0,
        perWheelChairFare: 0.0,
        perAnimalFare: 5.0,
        perCallServiceFare: 5.0,
        perCrossHarbourTunnelSingleTripFare: null,  // Lantau Taxi cannot cross tunnel
        perCrossHarbourTunnelDoubleTripFare: null,  // Lantau Taxi cannot cross tunnel
    })
}

const HongKongTaxiFareRule = HongKongTaxiFareRule_20240714

export default HongKongTaxiFareRule