import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Pros from '../components/Pros';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(180deg, #ffdada 0%, #fff1ef 13%, #ffffff 66%, #ffffff 100%)`,
        backgroundColor: '#FBAB7E',
      }}
    >
      <Navbar />
      <Hero />
      <Pros />
    </div>
  );
};

export default Home;
