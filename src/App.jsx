import Navbar from './components/layout/Navbar'
import HeroSection from './components/layout/HeroSection'
import FeaturesBar from './components/layout/FeaturesBar'
import FitSection from './components/layout/FitSection'
import BoutiqueSection from './components/layout/BoutiqueSection'
import CollectionsSection from './components/layout/CollectionsSection'
import LensQuiz from './components/layout/LensQuiz'
import HomeTrial from './components/layout/HomeTrial'
import BestSellers from './components/layout/BestSellers'
import Footer from './components/layout/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesBar />
      <FitSection />
      <BoutiqueSection />
      <CollectionsSection />
      <LensQuiz />
      <HomeTrial />
      <BestSellers />
      <Footer />
      
    </div>
  )
}

export default App