import React from 'react';
import Logo from '../../global_ui/logo'
import './RequestType.css'

function RequestType() {
    return(
      <div>
        <nav className='navbar'>
          <div className='back_div'>
            <button className='btn_back'>
              <i1 className='fas fa-chevron-left'></i1>
            </button>
          </div>
          <span className='nav_head'>
              Choose Request Type
            </span>
        </nav>
        <div className='container'>
          <Logo />
          <button className='btn2'>
            <span className='box'>
              <i2 className='fas fa-plus'></i2>
            </span>
            <span className='btn2_text'>
              General Request
            </span>
          </button>
          <button className='btn2'>
            <span className='icon2'>
              <i3 className='fas fa-truck-pickup'></i3>
            </span>
            <span className='btn2_text'>
              Pick Up / Drop
            </span>
          </button>
        </div>
      </div>
  
    )
}
export default RequestType;
