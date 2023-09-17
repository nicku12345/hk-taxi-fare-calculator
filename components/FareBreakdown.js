import { Box, Card, Divider, Grid, Typography } from "@mui/material"
import React from "react"

function createEquationProps({
    initial2KMCounter,
    initial2KMFare,
    subsequent200mOr1MinuteCounter,
    subsequent200mOr1MinuteFare,
    subsequent200mOr1MinuteDiscountedCounter,
    subsequent200mOr1MinuteFareDiscounted,
    additionalFare,
}) {
    return {
        initial2KMCounter: initial2KMCounter,
        initial2KMFare: initial2KMFare,
        subsequent200mOr1MinuteCounter: subsequent200mOr1MinuteCounter,
        subsequent200mOr1MinuteFare: subsequent200mOr1MinuteFare,
        subsequent200mOr1MinuteDiscountedCounter: subsequent200mOr1MinuteDiscountedCounter,
        subsequent200mOr1MinuteFareDiscounted: subsequent200mOr1MinuteFareDiscounted,
        additionalFare: additionalFare,
    }
}

function Equation({ equationProps, name }) {
    const initial2KMCounter = equationProps.initial2KMCounter
    const initial2KMFare = equationProps.initial2KMFare
    const subsequent200mOr1MinuteCounter = equationProps.subsequent200mOr1MinuteCounter
    const subsequent200mOr1MinuteFare = equationProps.subsequent200mOr1MinuteFare
    const subsequent200mOr1MinuteDiscountedCounter = equationProps.subsequent200mOr1MinuteDiscountedCounter
    const subsequent200mOr1MinuteFareDiscounted = equationProps.subsequent200mOr1MinuteFareDiscounted
    const additionalFare = equationProps.additionalFare

    let equationNumbers = []
    let totalFare = 0

    if (initial2KMCounter > 0) {
        equationNumbers.push([initial2KMFare])
        totalFare += initial2KMFare
    }

    if (subsequent200mOr1MinuteCounter > 0) {
        equationNumbers.push([subsequent200mOr1MinuteCounter, subsequent200mOr1MinuteFare])
        totalFare += subsequent200mOr1MinuteCounter * subsequent200mOr1MinuteFare
    }
    
    if (subsequent200mOr1MinuteDiscountedCounter > 0) {
        equationNumbers.push([subsequent200mOr1MinuteDiscountedCounter, subsequent200mOr1MinuteFareDiscounted])
        totalFare += subsequent200mOr1MinuteDiscountedCounter * subsequent200mOr1MinuteFareDiscounted
    }

    if (additionalFare > 0) {
        equationNumbers.push([additionalFare])
        totalFare += additionalFare
    }

    totalFare = Math.round(100 * totalFare) / 100

    const key = name.toLowerCase().split(' ').join('-')
    return (
        <Box 
            key={`equation-${key}`}
            sx={{
                display: 'flex',
                gap: "5px"
        }}>
            {equationNumbers.map((curr, i) => {
                return (
                    <React.Fragment key={`wrapper-number-component-${i}-${key}`}>
                        {
                            i === 0
                            ? <></>
                            : <Box key={`plus-sign-${i}-${key}`}>+</Box>
                        }
                        {
                            curr.length === 1
                            ? <Box key={`number-component-${i}-${key}`}>{curr[0]}</Box>
                            : <Box key={`number-component-${i}-${key}`}>{curr[0]}×{curr[1]}</Box>
                        }
                    </React.Fragment>
                )})
            }
            {
                equationNumbers.length > 1 || equationNumbers.some(curr => curr.length > 1)
                ? <React.Fragment key={`wrapper-result-component-${key}`}>
                    <Box key={`equal-sign-${key}`}>=</Box>
                    <Box key={`total-fare-${key}`}>{totalFare}</Box>
                </React.Fragment>
                : <React.Fragment key={`wrapper-result-component-${key}`}></React.Fragment>
            }
        </Box>
    )
}

export default function FareBreakdown({ fareBreakdownContext, name }) {
    const ctx = fareBreakdownContext.getFareBreakdownContext()
    return (
        <Card
            sx={{
                padding: "10px"
            }}
        >
            <Typography>
                {name}
            </Typography>
            <Divider
                sx={{
                    marginTop: "5px",
                    marginBottom: "5px"
                }}
            />
            <Equation
                equationProps={createEquationProps({ ...ctx })}
                name={name}
            />
        </Card>
    )
}