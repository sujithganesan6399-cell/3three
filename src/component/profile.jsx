import {fileds} from './useref'
import {createContext, useContext} from 'react'
import { useState } from 'react'

export const UserContext = createContext()

const [fileds, setFileds] = useState({Name: '', Email: '', Password: ''})

export default function Profile() {
  const user = fileds.Name
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        {fileds.map((field, index) => (
          <li key={index}>{field.label}: {field.name}</li>
        ))}
      </ul>
    </div>
  )
}