import './App.css'
import MainAppBar from './components/AppBar'
import Carousel from './components/Carousel'

let test = [
  '/src/images/cat-2083492_1280.jpg',
  '/src/images/cat-3266673_1280.jpg',
  '/src/images/kitten-1285341_1280.jpg']

function App() {

  return (
    <>
      <div className='container-fluid'>
        <MainAppBar/>
        <div>
          <Carousel imageName={test}/>
        </div>
      </div>
    </>
  )
}

export default App
