import img1 from './images/016A3060.jpg'
import img2 from './images/016A3065.jpg'
import img3 from './images/016A3170.jpg'
import img4 from './images/016A3289.jpg'
import img5 from './images/016A3298.jpg'
import img6 from './images/016A3308.jpg'
import img7 from './images/IMG_9373.jpg'
import img8 from './images/IMG_9413.jpg'
import img9 from './images/IMG_9497.jpg'
import './pages.css'

export default function Projects() {
    return (<div>
        <h1>Projects</h1>
    <h2> Over the years, the team here at Dubai-Landscapes has worked on a whole host of projects throughout the UAE, helping to enhance the outdoor space of numerous clients in the region. 
  </h2> 
  <h3>
  While we could tell you about our best work, we thought it would be better to show you instead. On this page, you’ll find our projects gallery where you can browse through some of our recent projects.  

  </h3>
  <div className='imagediv'>
    <img src={img1} alt=""></img>
    <img src={img2} alt=""></img>
    <img src={img3} alt=""></img>
    <img src={img4} alt=""></img>
    <img src={img5} alt=""></img>
    <img src={img6} alt=""></img>
    <img src={img7} alt=""></img>
    <img src={img8} alt=""></img>
    <img src={img9} alt=""></img>
    </div>
    </div>)
  }