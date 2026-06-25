import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/layout/HeroSection'
import FeaturesBar from '../components/layout/FeaturesBar'
import FitSection from '../components/layout/FitSection'
import BoutiqueSection from '../components/layout/BoutiqueSection'
import CollectionsSection from '../components/layout/CollectionsSection'
import LensQuiz from '../components/layout/LensQuiz'
import HomeTrial from '../components/layout/HomeTrial'
import BestSellers from '../components/layout/BestSellers'
import BespokeEyeCare from '../components/services/BespokeEyeCare'
import ServicesHeroCards from '../components/services/ServicesHeroCards'
import EyeClubStandard from '../components/services/EyeClubStandard'
import EyeTestBanner from '../components/services/EyeTestBanner'
import SignatureShape from '../components/services/SignatureShape'
import LensCollections from '../components/services/LensCollections'
import MembershipSection from '../components/services/MembershipSection'
import TestimonialsSection from '../components/services/TestimonialsSection'
import ContactSection from '../components/services/ContactSection'
import Footer from '../components/layout/Footer'

const HomePage = () => {
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
      <BespokeEyeCare />
      <ServicesHeroCards />
      <EyeClubStandard />
      <EyeTestBanner />
      <SignatureShape />
      <LensCollections />
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default HomePage