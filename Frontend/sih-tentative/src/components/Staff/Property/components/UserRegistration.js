import React, { useEffect, useState } from 'react'
import axiosconfig, { setToken } from "../../../../config";
import { Container, Typography, Grid, TextField, Select, MenuItem, InputLabel, Box, FormControl } from '@material-ui/core'
import { Message, Button } from 'semantic-ui-react'
import { ToastContainer, toast } from "react-toastify";
import { notify } from "./../../../toast";

const UserRegistration = ({ nextStep, handleChange, values, setUserID }) => {
    const [URS, setURS] = useState(1)
    const [data, setData] = useState({})

    const newURS = (e) => {
        e.preventDefault();
        setURS(3)
    }

    const handleChangeUser = input => e => {
        data[input] = e.target.value;
        setData(data)
    }

    const alreadyURS = (e) => {
        e.preventDefault();
        setURS(2)
    }

    const Continue = e => {
        e.preventDefault();
        console.log(data)
        if (URS == 3) {
            axiosconfig.post('/UserRegister').then((response) => {
                console.log(response)
                if (response.data.done) {
                    values.user_id = response.data.message.user_id
                    setUserID(response.data.message.user_id)
                    nextStep();
                } else {
                    notify(response.data.message)
                }

            }).catch((error) => {
                console.log(error);
            })
        }
        if (URS == 2) {
            axiosconfig.get('/UserRegister/' + data.user_id, data).then((response) => {
                console.log(response)
                if (response.data.done) {
                    values.user_id = response.data.message
                    setUserID(response.data.message)
                    nextStep();
                } else {
                    notify(response.data.message)
                }

            }).catch((error) => {
                console.log(error);
            })
        }

    }

    switch (URS) {
        case 1:
            return (
                <>
                    <div className="urform">
                        <Container component="main" maxWidth="xs">
                            <br />
                            <Grid container spacing={2}>
                                <br />
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        onClick={alreadyURS}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        User Aleardy exist
                                    </Button>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button
                                        onClick={newURS}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        New User  Registration
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </>
            )
        case 2:
            return (
                <>
                    <div className="pform">
                        <Container component="main" maxWidth="xs">
                            <div>
                                <Typography component="h1" variant="h5">
                                    Enter User Id
                                </Typography>

                                <form>
                                    <Grid container spacing={1}>
                                        {/* Area Address */}
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Enter User Id "
                                                label="Enter User Id"
                                                onChange={handleChangeUser('user_id')}
                                                defaultValue={values.user_id}
                                                // variant="outlined"
                                                autoComplete="user id"
                                                fullWidth
                                            />
                                        </Grid>

                                        <br />

                                    </Grid>

                                    <br />
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
                </>
            )
        case 3:
            return (
                <>
                    <div className="pform">
                        <Container component="main" maxWidth="xs">
                            <div>
                                <Typography component="h1" variant="h5">
                                    User Registration
                                </Typography>
                                <form>
                                    <Grid container spacing={2}>
                                        {/* Area Address */}
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Enter Your Name"
                                                label="Enter Your Name"
                                                onChange={handleChangeUser('name')}
                                                defaultValue={values.name}
                                                // variant="outlined"
                                                autoComplete="name"
                                                fullWidth
                                            />
                                        </Grid>

                                        <br />
                                        {/* Area Covered */}

                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Email"
                                                label="Enter Email Id"
                                                onChange={handleChangeUser('email')}
                                                defaultValue={values.email}
                                                // variant="outlined"
                                                autoComplete="email"
                                                fullWidth
                                            />
                                        </Grid>

                                        <br />
                                        {/* Construction Type */}
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Enter Mobile Number"
                                                label="Enter Mobile Number"
                                                onChange={handleChangeUser('mobile_number')}
                                                defaultValue={values.mobile_number}
                                                // variant="outlined"
                                                autoComplete="phone"
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Enter Permanant Address"
                                                label="Enter Permanant Address"
                                                onChange={handleChangeUser('home_address')}
                                                defaultValue={values.home_address}
                                                // variant="outlined"
                                                autoComplete="address"
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Enter Password"
                                                label="Enter Passowrd"
                                                onChange={handleChangeUser('password')}
                                                defaultValue={values.password}
                                                // variant="outlined"
                                                autoComplete="address"
                                                fullWidth
                                                type="password"
                                            />
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
                                        Save and Next
                                    </Button>
                                </form>
                            </div>
                        </Container>
                        <ToastContainer />
                    </div>
                </>
            )
    }
}

export default UserRegistration
