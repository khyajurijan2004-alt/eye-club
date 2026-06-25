import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/Footer'
import ServicesHeroCards from '../components/services/ServicesHeroCards'
import BespokeEyeCare from '../components/services/BespokeEyeCare'
import EyeClubStandard from '../components/services/EyeClubStandard'
import EyeTestBanner from '../components/services/EyeTestBanner'
import SignatureShape from '../components/services/SignatureShape'
import LensCollections from '../components/services/LensCollections'
import MembershipSection from '../components/services/MembershipSection'
import TestimonialsSection from '../components/services/TestimonialsSection'
import ContactSection from '../components/services/ContactSection'

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
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

export default ServicesPage
