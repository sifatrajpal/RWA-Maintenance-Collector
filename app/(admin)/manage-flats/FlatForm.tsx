'use client'

import { useState } from 'react'
import { addFlat } from './actions'

export default function FlatForm() {
  type FlatDetailType = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    flatNumber: string
    email: string
  }


  const [flatDetails, setFlatDetails] = useState<FlatDetailType>({firstName: '', lastName: '', phoneNumber: '', flatNumber: '', email: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlatDetails({ ...flatDetails, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <input type="text" placeholder='Enter First Name' name='firstName' onChange={handleChange} value={flatDetails.firstName}/>
      <input type="text" placeholder='Enter Last Name' name='lastName'onChange={handleChange} value={flatDetails.lastName}/>
      <input type="text" placeholder='Enter Phone Number' name='phoneNumber'onChange={handleChange} value={flatDetails.phoneNumber}/>
      <input type="text" placeholder='Enter Flat Number' name='flatNumber' onChange={handleChange} value={flatDetails.flatNumber}/>
      <input type="text" placeholder='Enter you email'  name='email' onChange={handleChange} value={flatDetails.email}/>
      <button onClick={() => {addFlat(flatDetails)}}>Submit</button>
    </div>
  )
}