
import './App.css'
import Navbar from './components/Navbar';
import BookNow from './components/Booknow'
import Service from './components/services'
import Footer from './components/footer';
import Message from './components/message';
import Testimonial from './components/testimonial'
import CustomerTestimonial from './components/customerTestimonial'

function App() {

  return (
    <div>
      <Navbar/>
      <BookNow/>
      <Service/>
      <Message/>
      <Testimonial/>
      <CustomerTestimonial/>
      <Footer/>
    </div>
  )
}

export default App
