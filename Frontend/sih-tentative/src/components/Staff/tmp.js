import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import ImageViewer from "react-simple-image-viewer";
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import "../../../CSS/updateRequest.css"

export default function UpdateRequest() {

    let currentImage = 0;
    let isViewerOpen = false;
    const images = [
        "http://placeimg.com/1200/800/nature",
        "http://placeimg.com/800/1200/nature"
    ];

    const openImageViewer = (index) => {
        console.log("index  " + index)
        currentImage = index;
        isViewerOpen = true;
        console.log("isViewerOpen  " + isViewerOpen)
    };

    const closeImageViewer = () => {
        currentImage = 0;
        isViewerOpen = false;
    };

    const val = '';
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
                            <ListItemText primary="Selected Affidavit document " secondary={<Button onClick={() => openImageViewer(0)} style={{ backgroundColor: '#2218A7', color: 'white' }}>view</Button>} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="selected Application document" secondary={<Button onClick={() => openImageViewer(1)} style={{ backgroundColor: '#2218A7', color: 'white' }}>view</Button>} />
                        </ListItem>
                    </List>

                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                // onClick={Previous}
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
                                // onClick={Continue}
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
            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
            )}
        </div>
    )

}
