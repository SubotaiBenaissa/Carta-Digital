import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTable } from "../../hooks"
import './ClientLayout.scss'

export const ClientLayout = ({ children }) => {

  const { existingTable } = useTable()
  const { tableNumber } = useParams()
  const navigate = useNavigate()

  const tableExists = async() => {

    const exist = await existingTable(tableNumber)
    console.log(exist)
    if( !exist ) closeTable()

  }

  useEffect(() => {
    tableExists()
  }, [ tableNumber ])

  const closeTable = () => {
    navigate("/")
  } 

  return (

    <div>
      <h1>ClientLayout</h1>
      { children }
    </div>

  )
}
