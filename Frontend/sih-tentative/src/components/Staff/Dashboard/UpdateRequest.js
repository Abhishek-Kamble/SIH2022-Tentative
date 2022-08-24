import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import view from '@mebtte/react-image-viewer/view';
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import "../../../CSS/updateRequest.css";
import MyVerticallyCenteredModal from './component/MyVerticallyCenteredModal';


export default function UpdateRequest() {
  const val = '';
  const src = 'http://placeimg.com/1200/800/nature';
  const [modalShow, setModalShow] = useState(false);
  const viewImage = () => view(src)

  const handleUpdate = () => {

  }
  const handleReject = () => {
    setModalShow(true);
  }
  return (
    <div className='main_card'>
      <div className='card_request'>
        <div>
          <List>
            <ListItem>
              <ListItemText primary="Area Adress" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Construction Area" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Construction Type" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupacy Type" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Year of Construction" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Zone" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Property Type" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Use of Property" secondary={val} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Selected Affidavit document " secondary={<Button onClick={() => viewImage(src)} style={{ backgroundColor: '#2218A7', color: 'white' }}>view</Button>} />
            </ListItem>
            <ListItem>
              <ListItemText primary="selected Application document" secondary={<Button onClick={() => viewImage(src)} style={{ backgroundColor: '#2218A7', color: 'white' }}>view</Button>} />
            </ListItem>
          </List>

          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={handleReject}
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: 'red', color: 'white' }}
              >
                Reject
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={handleUpdate}
                style={{ backgroundColor: 'green', color: 'white' }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </div>

      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )

}
