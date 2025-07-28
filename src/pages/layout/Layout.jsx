import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Outlet } from 'react-router-dom'
import { memo } from "react"

const Layout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default memo(Layout);