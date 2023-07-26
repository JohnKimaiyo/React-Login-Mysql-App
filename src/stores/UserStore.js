import { extendObservable } from "mobx";


import React from 'react'

export default function UserStore() {
  return (
    extendObservable(this, {
        loading: true,
        isLoggedIn: false,
        username: "",
      })
  )
}
