import React from 'react'
import Whirly from './Whirly'
import Header from './Header'
import Sidebar from './Sidebar'
import PageHeader from './PageHeader'

function AppContainer(props) {
  return (
    <>
        {/* <Whirly /> */}
        <Header />
        <Sidebar />
        <div class="page-wrapper">
        <div class="content">
            <div className='row'>
               <PageHeader title={props.title}/>
            </div>
            
            {props.children}
        </div>
        </div>

    </>
  )
}

export default AppContainer