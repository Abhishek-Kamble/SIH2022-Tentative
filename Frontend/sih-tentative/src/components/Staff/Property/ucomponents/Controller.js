import React, { Component } from 'react'
import PropertyDetails from './PropertDetails'
import UploadDetails from './UploadDetails'
import Confirmation from './Confirmation'
import Success from './Success'

export default class Controller extends Component {

  state = {
    step: 1,
    property_address:'',
    areacovered: '',
    yearconstruction:new Date().toJSON().slice(0,10), 
    zone_id: '',
    user_id: '',
    use: '',
    constructortype: '',
    occupancytype: '',
    type: '',
    aff_id_bd:'',
    aff_id_bd_name:'',
    app_id_bd:'',
    app_id_bd_name:'',
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

  // Handle fields change
  handleChange = input => e => {
    if(e.target.files == null){
      this.setState({ [input]: e.target.value });
    }else{
      var fname = input + '_name';

      this.setState({ [fname]: e.target.files[0].name})
      this.setState({ [input]: e.target.files[0]})
      console.log(fname)
    }
    
    
  }

  render() {
    const { step } = this.state;
    const { property_address,areacovered,yearconstruction, zone_id,user_id,use,constructortype,occupancytype,type,aff_id_bd_name,app_id_bd_name,aff_id_bd,app_id_bd } = this.state;
    const values = { property_address,areacovered,yearconstruction, zone_id,user_id,use,constructortype,occupancytype,type,aff_id_bd_name,app_id_bd_name,aff_id_bd,app_id_bd }
    
    switch(step) {
      case 1: 
        return (
          <PropertyDetails 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <UploadDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <Confirmation 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
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
