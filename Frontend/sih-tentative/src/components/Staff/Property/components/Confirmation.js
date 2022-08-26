import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import axiosconfig, { setToken } from "../../../../config";
import { notify } from "../../../toast";
import { ToastContainer, toast } from "react-toastify";



function validate(value) {
  const { property_address, land_number, yearconstruction, zone_id, user_id, use, constructortype, occupancytype, type, aff_id_bd_name, aff_id_bd, app_id_bd_name, app_id_bd } = value
  if (property_address && land_number && yearconstruction && zone_id && use && constructortype && occupancytype && type && aff_id_bd_name && aff_id_bd && app_id_bd_name && app_id_bd) {
    return true;

  }
  return false;

}

const useProperty = [
  "Residential Purpose",
  " Non residential public purpose | ",
  " Non residential public utility ",
  " Industry, entertainment and clubs ",
  " Restaurants, hotels up to 2 star rating ",
  " 3star and above hotels, towers, hoarding"
]

const ConstructionType = [
  "RCC building (pucca )  ",
  "semi RCC building (semi pucca )",
  "non rcc building ( kuchcha )"
]

const OccupancyType = [
  "Self occupied",
  "Rented out ",
  "acant plot "
]

const PType = [
  "Residential Property", "Commercial Property", "Industrial Property"
]

const Confirmation = ({ prevStep, nextStep, values }) => {
  const { property_address, land_number, yearconstruction, zone_id, user_id, use, constructortype, occupancytype, type, aff_id_bd_name, aff_id_bd, app_id_bd_name, app_id_bd } = values
  const Continue = async (e) => {
    e.preventDefault();
    if (validate(values)) {
      setToken(localStorage.getItem('token'));
      axiosconfig.post('/Property/register', values).then((response) => {
        console.log(response);
        if (response.data.done) {
          nextStep();
        } else {
          notify(response.data.message, 'error');
        }
      }).catch((error) => {
        notify('Something is wrong with the registration Please try again', 'error');
      })
    } else {
      notify('All Field are required', 'error');
    }

  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div className="pcform">
      <Container component="main" maxWidth="xs">
        <div>
          <List>
            <ListItem>
              <ListItemText primary="User Id - " secondary={user_id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Property Address" secondary={property_address} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Land Number" secondary={land_number} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Year of construction" secondary={yearconstruction} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Zone ID" secondary={zone_id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Use of Property" secondary={useProperty[use - 1]} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Construction Type" secondary={ConstructionType[constructortype - 1]} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupancy Type" secondary={OccupancyType[occupancytype - 1]} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Select Property Type" secondary={PType[type - 1]} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Selected Affidavit document " secondary={aff_id_bd_name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="selected Application document" secondary={app_id_bd_name} />
            </ListItem>
          </List>

          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
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
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Confirm & Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <ToastContainer />
    </div>
  )
}

export default Confirmation
