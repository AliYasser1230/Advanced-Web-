import {React, useState} from 'react'
import {Link } from 'react-router-dom'
import nav from '../css/navbar.css'
import {GiEgyptianBird} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {MdOutlineFormatListBulleted} from 'react-icons/md'
import {admin} from '../recoil/atom/cartState'
import {useRecoilState} from 'recoil'
import CartItems from './CartItems'

const Navbar = () => {
  const [panel, setPanel] = useRecoilState(admin);


  const [log, setLog] = useState(true);
  const [list, setList] = useState(false);
  const [cart, setCart] = useState(false);
  const handleClick = ()=>{
    setLog(!log)
  }
  const handleList = ()=>{
    setList(!list);
    setCart(false);
  }
  const handleCart = ()=>{
    setCart(!cart);
    setList(false);
  }
  return (
    <div className='main'>
      <div>
      <div className='nav-head'>
      
        <div >    
          <div className='listsvg-container'>
          <MdOutlineFormatListBulleted className='listsvg' onClick={handleList}/>
          </div>
        </div>
        <div className='name font'>
            BlackBirds
            <GiEgyptianBird className='img'/>
        </div>
        <div>
        
           {
            log && 
            <div onClick={()=>{setLog(false)}} className='login-container-2'>
              <Link to={`/login`} >
                <button className='home-login'>LOGIN</button>
              </Link>
            </div>
           }
          
        
          <HiShoppingCart className='cart' onClick={handleCart}/>
        </div>
        </div>
        <div className='list-container'>
            <ul className='list'>
              <Link to={`/`} className="link">
                <li className='home list-item' onClick={()=>{setLog(true)}}>Home</li>
              </Link>
                <li className='list-item'>About</li>
                <Link to={'/shop'} className='link'>
                <li className='list-item'>Shop</li>
                </Link>
            <Link to={`/Contactus`} className="link">
                <li className='list-item' onClick={()=>{setLog(true)}}>Contact Us</li>
            </Link>
              {
                  panel==1 &&
                <Link to={'/panel'} className='link'>
                  <li className='list-item'>Panel</li>
                </Link>
              }
                
            </ul>
            {
              log && 
              <div onClick={()=>{setLog(false)}} className='login-container'>
                <Link to={`/login`}>
                  <button className='home-login'>LOGIN</button>
                </Link>
              </div>
            }
                
            
        </div>
        
        </div>
        <div>
        {
          cart &&  
          <CartItems/>
        }
{
            list &&
            <div className='list-att'>
              <ul className='list-list'>
                <li className='close-list' onClick={handleList}>x</li>
                <Link to='/' className="link"><li className='list-list-item'>Home</li></Link>
                <Link to='/' className="link"><li className='list-list-item'>About</li> </Link>
                <Link to='/shop' className="link"><li className='list-list-item'>Shop</li> </Link>
                <Link to='/Contactus' className='link'><li className='list-list-item'>Contact us</li></Link>
              </ul>
            </div>
          }
        </div>
    </div>
  )
}

export default Navbar