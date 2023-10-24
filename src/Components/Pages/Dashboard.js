import React from 'react'
import AppContainer from '../Structure/AppContainer'
import RecentlyProducts from './Products/RecentlyProducts'
import CardsCount from '../Common/Cards/CardsCount'
import RecentCustomers from './Customers/RecentCustomers'

function Dashboard() {
  return (
    <AppContainer title="Dashboard">
        <div class="row">
    <div class="col-lg-4 col-sm-6 col-12 d-flex">
    <CardsCount 
        title={'Customers'}
        icon={<i data-feather="user"></i>}
        count={100}
        dashtype={'das1'}
        />
    </div>

    <div class="col-lg-4 col-sm-6 col-12 d-flex">
        <CardsCount 
        title={'Parts'}
        icon={<i data-feather="settings"></i>}
        count={100}
        dashtype={'das2'}
        />
    </div>

    <div class="col-lg-4 col-sm-6 col-12 d-flex">
    <CardsCount 
        title={'Suppliers'}
        icon={<i data-feather="truck"></i>}
        count={10}
        dashtype={'das4'}
        />
    </div>

    

    <div class="col-lg-6 col-sm-12 col-12 d-flex">
    <RecentlyProducts />

    </div>
    <div class="col-lg-6 col-sm-12 col-12 d-flex">
    <RecentCustomers />
    </div>
    </div>
    </AppContainer>
  )
}

export default Dashboard