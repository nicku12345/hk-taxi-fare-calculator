import FareBreakdown from '@components/FareBreakdown'
import Form from '@components/Form'
import FormSubmissionButton from '@components/FormSubmissionButton'
import { Stack, Typography } from '@mui/material'
import createDefaultFareBreakdownContext from 'context/FareBreakdownContext'
import createDefaultFormContext from 'context/FormContext'
import createDefaultFormSubmissionButtonContext from 'context/FormSubmissionButtonContext'
import HongKongTaxiFareRule from 'data/TaxiFareRule'
import fareBreakdownCalculator from 'lib/FareBreakdownCalculator'

export default function Home() {
  const formContext = createDefaultFormContext()
  const formSubmissionButtonContext = createDefaultFormSubmissionButtonContext()

  const urbanFareBreakdownContext = createDefaultFareBreakdownContext()
  const ntFareBreakdownContext = createDefaultFareBreakdownContext()
  const lantauFareBreakdownContext = createDefaultFareBreakdownContext()
  
  const handleOnClick = (e) => {
    fareBreakdownCalculator(formContext, HongKongTaxiFareRule.UrbanTaxi, urbanFareBreakdownContext)
    fareBreakdownCalculator(formContext, HongKongTaxiFareRule.NewTerritoriesTaxi, ntFareBreakdownContext)
    fareBreakdownCalculator(formContext, HongKongTaxiFareRule.LantauTaxi, lantauFareBreakdownContext)
  }

  formSubmissionButtonContext.setOnClick(handleOnClick)

  return (
    <Stack
      sx={{
        margin: "auto",
        maxWidth: "500px",
        marginTop: "10px",
        padding: "10px"
      }}
      gap="10px"
      display="flex"
      justifyContent="center"
    >
      <Form formContext={formContext} />
      <FormSubmissionButton formSubmissionContext={formSubmissionButtonContext} />
      <FareBreakdown fareBreakdownContext={urbanFareBreakdownContext} name="Urban Taxi"/>
      <FareBreakdown fareBreakdownContext={ntFareBreakdownContext} name="New Territories Taxi"/>
      <FareBreakdown fareBreakdownContext={lantauFareBreakdownContext} name="Lantau Island Taxi"/>
    </Stack>
  )
}
