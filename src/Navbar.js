import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from './StateProvider'
import {auth} from './firebase';
import { AiOutlineMenu } from 'react-icons/ai';
import { Menu, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="" rel="noopener noreferrer" href="/laptops">
          Laptops
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="" rel="noopener noreferrer" href="electronics">
          Mobiles
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
        Desktops
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          CPU Fan
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
        Processor
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Router
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Switch
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          RAM
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Hardisk
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Power Supply
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Motherboard
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          Casing
        </a>
      </Menu.Item>
    </Menu>
  );


function Navbar() {

    const [{basket,user},dispatch]=useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="navbar">

        <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <AiOutlineMenu className="aaicon"/>
        </Dropdown>

        <Link to="/"> 
        <img className="header-logo" src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.0-9/117309591_580358609313718_6337693630479230739_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=nl-zS1neNMsAX-yAvKS&_nc_ht=scontent.fktm10-1.fna&oh=5248c9b74de6efb4ea2a76a6b565f160&oe=5FA2924C" alt=''/>
        </Link>

        <div className="header-search">
            <input className="header-search-input" type="text" placeholder="Search..."/>
            <SearchIcon className="header-search-icon" />
        </div>

        <div className="header-nav">
            <Link to={!user && '/login'} className="a1">
                <div onClick={handleAuthentication} className="header-options">
                <span className="header-option-line2">{!user ? 'Guest' : user.email}</span>
                    <AccountCircleIcon className="icon-size"/>
                    {/* <span className="header-option-line1">Welcome</span> */}
                    <span className="header-option-line2">{user ? 'Sign Out' : 'Sign In/Register'}</span>
                </div>
            </Link>

            <Link to='/cart' className="a1">
            <div className="header-optionbasket">
                <ShoppingCartIcon className="icon-size"/>
                <span className="header-option-line2 basket-count">{basket?.length}</span>
            </div>
            </Link>

        </div>              
    </div>
    )
}

export default Navbar
