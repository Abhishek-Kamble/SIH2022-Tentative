import React, { Component } from 'react'
import PropertyDetails from './PropertDetails'
import UploadDetails from './UploadDetails'
import Confirmation from './Confirmation'
import UserRegistration from './UserRegistration'
import Success from './Success'
import axiosconfig, { setToken } from "../../../../config";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default class Controller extends Component {

  state = {
    step: 0,
    property_address: '',
    land_number: '',
    yearconstruction: new Date().toJSON().slice(0, 10),
    zone_id: '',
    user_id: '',
    use: '',
    constructortype: '',
    occupancytype: '',
    type: '',
    aff_id_bd: '',
    aff_id_bd_name: '',
    app_id_bd: '',
    app_id_bd_name: '',
    zoneArray: [],
    isLoading: false,
  }

  componentDidMount() {
    console.log(this.state)
    axiosconfig.get('/zones').then((response) => {
      this.setState({ zoneArray: response.data.data })
      this.setState({ isLoading: true })
    }).catch((error) => {
      console.log(error)
    })
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  setUserID = (val) => {
    this.setState({ user_id: val });
  }
  // Handle fields change
  handleChange = input => e => {
    if (e.target.files == null) {
      this.setState({ [input]: e.target.value });
    } else {
      var fname = input + '_name';

      this.setState({ [fname]: e.target.files[0].name })
      this.setState({ [input]: e.target.files[0] })
      console.log(fname)
    }


  }

  render() {
    const { step, isLoading } = this.state;
    if (!isLoading) {
      return (
        <Segment className='loader_staffInfo'>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      )
    }
    const { property_address, land_number, yearconstruction, zone_id, user_id, use, constructortype, occupancytype, type, aff_id_bd_name, app_id_bd_name, aff_id_bd, app_id_bd, zoneArray } = this.state;
    const values = { property_address, land_number, yearconstruction, zone_id, user_id, use, constructortype, occupancytype, type, aff_id_bd_name, app_id_bd_name, aff_id_bd, app_id_bd, zoneArray }
    switch (step) {
      case 0:
        return (
          <UserRegistration
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            setUserID={this.setUserID}
          />
        )
      case 1:
        return (
          <PropertyDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <UploadDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 4:
        return (
          <Success />
        )
      default:
      // do nothing
    }
  }
}
