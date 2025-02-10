
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import InnovationsShowcase from './components/InnovationsShowcase';
import AfricanChallenges from './components/AfricanChallenges';
import Community from './components/Community';
import Team from './components/Team';
import Events from './components/Events';
import Blog from './components/Blog';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-gray-700 ">
      <Navbar />
      <div className="pt-16 ">
        <Hero />
        <ServicesOverview />
        <InnovationsShowcase />
        <AfricanChallenges />
        <Community />
        <Team />
        <Events />
        <Blog />
        <WhyChooseUs />
        <ContactForm />
        <ContactCTA />
      </div>
    </div>
  );
}

export default App;