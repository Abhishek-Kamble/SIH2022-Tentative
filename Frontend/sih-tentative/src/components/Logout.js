import React, { Component, useEffect } from 'react'
import AuthService from '../auth.service';

const Logout = () => {
  useEffect(() => {
    AuthService.logout();
  },[])
    return (
      <></>
    )
}
export default Logout
