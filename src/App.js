import React from 'react';
import { useState } from 'react';
import './App.css';
import All from './Components/All';
import 'aos/dist/aos.css'
import AOS from 'aos';

function App() {

  const [scroll, setscroll] = useState(false)

  window.onscroll = function() {
    if(window.pageYOffset >= 300) {
      setscroll(true)
    }else {
      setscroll(false)
    }
  }

  function GoTop() {
    window.scroll(0, 0)
  }


  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <All />
        {
          scroll ?
            <button data-aos="fade-left" data-aos-duration='500' data-aos-offset="800" data-aos-easing='linear'  onClick={GoTop} className='btn btn-scroll'> <i className='fas fa-angle-up'></i> </button> :
          ""
        }
        
    </div>
  );
}

export default App;
