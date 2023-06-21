import './App.css'
import MainAppBar from './components/AppBar'
import Carousel from './components/Carousel'



function App() {

  return (
    <>
      <div className='container-fluid'>
        <MainAppBar/>
        <div>
          <Carousel/>
        </div>
      </div>
    </>
  )
}

export default App
