import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './components/header'
import { Footer } from './components/footer'

export const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer/>
        </React.Fragment>
    )
}
