import React from 'react'

function Flipkart(Flipkart) {
  return (
    <>
    <div>
    <div className='run'><h1><marquee>Welcom To 1st Order +70%.Discount</marquee></h1></div>
    <div className='header'>
        <div style={{padding:'10vh'}}><h1>Flipkart</h1></div>
        <div>
            <ul id='text'> 
                <li>
                    <a href='LogIn'>Log In</a>
                </li>
                <li>
                    <a href='Registration'>Registration</a>
                </li>
                <input type='search' placeholder='Search'></input>
            </ul>
            
        </div>
    </div>

    <div className='cetegary'></div>


    <div className='face'>
    <img  src={Flipkart.imgsrc} width={1343} height={620}/>
   
    </div>





















    <div className='aside'>Copyright &copy;Flipkart</div>
    </div>
    </>
  )
}

export default Flipkart