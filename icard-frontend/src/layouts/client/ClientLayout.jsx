import React, { useEffect } from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTable } from "../../hooks"
import './ClientLayout.scss'

export const ClientLayout = ({ children }) => {

  const { existingTable } = useTable()
  const { tableNumber } = useParams()
  const navigate = useNavigate()

  const tableExists = async() => {

    const exist = await existingTable(tableNumber)
    // console.log(exist)
    if( !exist ) closeTable()

  }

  useEffect(() => {
    tableExists()
  }, [ tableNumber ])

  const closeTable = () => {
    navigate("/")
  } 

  const goToCart = () => {
    navigate(`/client/${ tableNumber }/cart`)
  }

  const goToOrders = () => {
    navigate(`/client/${tableNumber}/orders`)
  }

  return (

    <div className='client-layout-bg'>
      <Container className="client-layout">
        <div className="client-layout__header">
          <Link to={`/client/${tableNumber}`}>
            <h1>iCard</h1>
          </Link>
          <span>Mesa { tableNumber }</span>
          <div>
            <Button icon onClick={ goToCart }>
              <Icon name="shop" />
            </Button>
            <Button icon onClick={ goToCart }>
              <Icon name="list" />
            </Button>
            <Button icon onClick={ closeTable }>
              <Icon name="sign-out" />
            </Button>
          </div>
        </div>
        <div className="client-layout__content">
          { children }
        </div>
      </Container>
    </div>

  )
}
