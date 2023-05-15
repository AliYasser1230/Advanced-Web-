import React from 'react';
import Contact from '../css/Contactus.css'
const Contactus = () => {
    return (
        
        <div>
            <img className='img-contact' src="https://media1.tenor.com/images/3b97033a48fd58a90fbf9258b037594f/tenor.gif?itemid=18019266"/>
           
            <div className='Main-ContactUs'>
            
                <form >
                    <div className='form-container'>
                 <h1>CONTACT US</h1><br />
                 <div className='form-items'>
                   <input type="text" placeholder='Enter Your Name' className='inputs-contactus' /><br />
                   <input type="text" placeholder='Email Address' className='inputs-contactus' /><br />
                   <input type="text" className='message' placeholder='Enter your message here'/><br />
                   <button className='button-submit'>SUBMIT</button>
                 </div>
                </div>
                </form>
                



            </div>
        </div>
    );
}

export default Contactus;
