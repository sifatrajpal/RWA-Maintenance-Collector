'use client'

import { useState } from 'react'
import { addFlat } from './actions'

export default function FlatForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [flatNumber, setFlatNumber] = useState('')

  async function handleAddFlat() {
    const result = await addFlat({
      firstName,
      lastName,
      phoneNumber,
      flatNumber,
    })

    if (!result.success) {
      // show result.message
    }
  }

  return (
    <button onClick={handleAddFlat}>Add Flat</button>
  )
}