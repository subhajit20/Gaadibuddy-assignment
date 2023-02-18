
import './App.css'
import Navbar from './components/Navbar';
import BookNow from './components/Booknow'
import Service from './components/services'
import Footer from './components/footer';
import Message from './components/message';

function App() {

  return (
    <div>
      <Navbar/>
      <BookNow/>
      <Service/>
      <Message/>
      <Footer/>
    </div>
  )
}

export default App
