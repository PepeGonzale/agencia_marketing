import {connect} from 'react-redux'
import {useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo_boomslag from 'assets/img/boomslag-black.png'
import loading_gif from 'assets/img/loading_gif.gif'
import { DotLoader } from 'react-spinners'
function Navbar() {
  const [loading, setLoading ] = useState()
    return (
        <nav className='w-full py-4 top-0 fixed'>
            <div className="bg-white px-4 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
        <Link to = "/"className="ml-4 mt-2">
          <img src={logo_boomslag} 
          width= {140}
          height ={120}
          className=""/>
        </Link>
        {/* Otra forma de hacer el hover: underline es hcer border-b-orange */}
        <div className="ml-4 mt-2 flex-shrink-0">
        <NavLink to = '/casos' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-2 inline-flex mx-4">Casos</NavLink>
        <NavLink to = '/servicios' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-2 inline-flex mx-4">Servicios</NavLink>
        <NavLink to = '/nosotros' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-2 inline-flex mx-4">Nosotros</NavLink>
        <NavLink to = '/carreras' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-2 inline-flex mx-4">Carreras</NavLink>
        <NavLink to = '/blog' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-2 inline-flex mx-4">Blog</NavLink>
        <NavLink to = '/contacto' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-2 inline-flex mx-4">Contacto</NavLink>
         
          <Link
        to = "/contacto"orange
        className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Hire us
        <DotLoader loading= {loading_gif} size = {20} color= "#f2f2f2"/>
      </Link>
        </div>
      </div>
    </div>
        </nav>
    )
}
const mapStateToProp = state => ({

})
export default connect(mapStateToProp, {

}) (Navbar)