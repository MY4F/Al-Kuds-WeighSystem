
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import kuds from '../assets/images/kuds.png';
export default function RootLayout() {
    return (
        <div className='background'>
            <div className='container'>
                <div className='main-content'>
                    
                <Outlet />
                </div>
                
                <div className='nav'>
                    <img src={kuds} />
                    <NavLink to={"/"}> خارج </NavLink>
                    <NavLink to={"in"}> داخل</NavLink>
                    <NavLink to={"impexp"}>جرد</NavLink>
                    <NavLink to={"day"}>يوميه</NavLink>
                    <NavLink to={"storage"}>مخزن</NavLink>
                    <NavLink to={"settings"}>اعدادات</NavLink> 
                </div>
            </div>
        </div>
    )
}