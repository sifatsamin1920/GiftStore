import './App.css'
import CourseSlider from './CourseSlider'
import EmailSubmit from './EmailSubmit'
import OffersSection from './FreeCardsAmazon'
import FreeCardSection2 from './FreeCardSection2'
import GiftCardSlider from './GiftCardSlider'
import Navbar from './Navbar'
import Slider from './Slider'
import SurvaySubmit from './SurvaySubmit'

function App() {
  return (
    <>
      <Navbar/>
      {/* <Slider/> */}
      {/* <CourseSlider/> */}
      <GiftCardSlider/>
      {/* <OffersSection/> */}
      <FreeCardSection2/>
      <EmailSubmit/>
      <SurvaySubmit/>
    </>
  )
}

export default App
