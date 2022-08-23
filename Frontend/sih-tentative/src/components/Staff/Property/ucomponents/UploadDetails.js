import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const UploadDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div className="pform">
      <Container  component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
        Update Property Details
        </Typography>

        <br />
        <div>
          <h3>Upload below Decoumntation for verification purpose</h3>
        </div>

        <br /> 
        <form>
          <Grid container spacing={2}>

            {/* country of residence */}
            <Grid item xs={6}>
              <Typography component="h2" variant="h5">Upload Affidavit document</Typography>
            </Grid>
            <Grid item xs={6}>
              
              <TextField 
                onChange={handleChange('aff_id_bd')}
                defaultFiles={values.aff_id_bd}
                type="file"
                fullWidth
              />
            </Grid>

            {/* level of education */}
            {/* country of residence */}
            <Grid item xs={6}>
              <Typography component="h2" variant="h5">Upload Application document</Typography>
            </Grid>
            <Grid item xs={6}>
              
              <TextField 
                onChange={handleChange('app_id_bd')}
                defaultFiles={values.app_id_bd}
                type="file"
                fullWidth
              />
            </Grid>

            <br />

            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  )
}

export default UploadDetails

