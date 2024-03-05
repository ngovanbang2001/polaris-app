import { Page, Layout, Button } from '@shopify/polaris'
import React from 'react'
import { APP_ROUTERS } from '../../utils/constants'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Container } from '../../components/home/style'

const Home = () => {
  const  history= useHistory()

  const handleRedirect = ()=>{
    history.push(APP_ROUTERS.CREATE_DISCOUNT.value)
  }
  
  return (
    <Page fullWidth>
      <Layout style={{ display: 'flex', height: '100%' }}> 
        <Container >
          <Button tone='success' variant='primary' size='large' textAlign='center' onClick={handleRedirect}>Create Volume Discount</Button>
        </Container>
      </Layout>
    </Page>
  )
}

export default Home
