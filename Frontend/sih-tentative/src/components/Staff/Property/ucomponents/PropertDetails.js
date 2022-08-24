import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button, Select, MenuItem, InputLabel, Box, FormControl } from '@material-ui/core'
// import ReactDatePicker from "react-datepicker";

const PropertyDetails = ({ nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div className="pform">
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5">
            Update Property Details
          </Typography>
          <form>
            <Grid container spacing={2}>
              {/* Area Address */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Area Address"
                  label="Area Address"
                  onChange={handleChange('property_address')}
                  defaultValue={values.property_address}
                  // variant="outlined"
                  autoComplete="address"
                  fullWidth
                />
              </Grid>

              <br />
              {/* Area Covered */}

              <Grid item xs={12}>
                <TextField
                  placeholder="Construction  Area (Sq. Ft./ Sq. Meters)"
                  label="Construction  Area (Sq. Ft./ Sq. Meters)"
                  onChange={handleChange('areacovered')}
                  defaultValue={values.areacovered}
                  // variant="outlined"
                  autoComplete="area"
                  fullWidth
                />
              </Grid>

              <br />
              {/* Construction Type */}

              <Grid item xs={12}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="constructortype">Construction Type</InputLabel>
                    <Select
                      labelId="constructortype"
                      id="demo-simple-select"
                      value={values.constructortype}
                      label="Construction Type"
                      onChange={handleChange('constructortype')}
                      fullWidth
                    >
                      <MenuItem value={1}>RCC building (pucca )</MenuItem>
                      <MenuItem value={2}>semi RCC building (semi pucca )</MenuItem>
                      <MenuItem value={3}>non rcc building ( kuchcha )</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <br />
              {/* Occupancy Type */}

              <Grid item xs={12} sm={6}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="occupancytype">Occupancy Type</InputLabel>
                    <Select
                      labelId="occupancytype"
                      id="demo-simple-select"
                      value={values.occupancytype}
                      label="Occupancy Type"
                      onChange={handleChange('occupancytype')}
                      fullWidth
                    >
                      <MenuItem value={1}>Self occupied</MenuItem>
                      <MenuItem value={2}>Rented out</MenuItem>
                      <MenuItem value={3}>vacant plot</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <br />
              {/* construction yearconstruction */}
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Year of construction"
                  label="Year of construction"
                  onChange={handleChange('yearconstruction')}
                  defaultValue={values.yearconstruction}
                  // variant="outlined"
                  autoComplete="date"
                  type="date"
                  fullWidth
                />
              </Grid>

              <br />
              {/* Zone id */}

              <Grid item xs={12} sm={6}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="zoneid">Select Zone</InputLabel>
                    <Select
                      labelId="zoneid"
                      id="demo-simple-select"
                      value={values.zone_id}
                      label="Select Zone "
                      onChange={handleChange('zone_id')}
                      fullWidth
                    >
                      <MenuItem value={1}>Cat 1</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <br />
              {/* Type id */}

              <Grid item xs={12} sm={6}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="type">Select Property Type</InputLabel>
                    <Select
                      labelId="type"
                      id="demo-simple-select"
                      value={values.type}
                      label="Select Property Type "
                      onChange={handleChange('type')}
                      fullWidth
                    >
                      <MenuItem value={1}>Residential Property</MenuItem>
                      <MenuItem value={2}>Commercial Property</MenuItem>
                      <MenuItem value={3}>Industrial Property</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <br />
              {/* use  */}

              <Grid item xs={12}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="use">Use of Property</InputLabel>
                    <Select
                      labelId="use"
                      id="demo-simple-select"
                      value={values.use}
                      label="Use of Property"
                      onChange={handleChange('use')}
                      fullWidth
                    >
                      <MenuItem value={1}>Residential Purpose</MenuItem>
                      <MenuItem value={2}>Non residential public purpose</MenuItem>
                      <MenuItem value={3}>Non residential public utility</MenuItem>
                      <MenuItem value={4}>Industry, entertainment and clubs </MenuItem>
                      <MenuItem value={5}>Restaurants, hotels up to 2 star rating </MenuItem>
                      <MenuItem value={6}>3 star and above hotels, towers, hoarding</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <br />
            </Grid>
            <br />
            <Button
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default PropertyDetails
