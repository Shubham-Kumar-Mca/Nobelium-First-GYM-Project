
import AboutUs from './pages/AboutUs/AboutUs'
import RegisterLogin from './pages/RegisterLogin/RegisterLogin'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/'} element={<RegisterLogin />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   {/* <AboutUs /> */}
    //   <RegisterLogin/>
    // </div>
  )
}

export default App
