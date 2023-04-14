import './pages.css'
import img13 from './images/IMG_9596.jpg'
import img14 from './images/IMG_9695.jpg'
import img15 from './images/IMG_9582.jpg'

export default function ContactUs() {
    return <div> <h1>Contact Us</h1>
                <h2>If you need any more information on the range of services Dubai-Landscapes offers, or want to hire our team to carry out work on your property in the UAE, we’re always here to help. </h2>
                <h3>We place customer service at the forefront of everything we do and strive to bring British service to the UAE market. To find out more information about how we can enhance your outdoor living experience, drop us a message on WhatsApp or give us a call. Alternatively, you can complete the online form and a member of our team will get in touch with you. </h3>
                <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />

  <form>
  <label>
    Contact Number:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  <label>
    Reason for contacting:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

<img src={img13} alt=""></img>
<img src={img14} alt=""></img>
<img src={img15} alt=""></img>


    
    </div>
  }