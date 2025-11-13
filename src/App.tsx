import { motion } from 'framer-motion';
import BackgroundMusic from './components/BackgroundMusic';
import ColorBends from './components/ColorBends';
import Hero from './components/Hero';

const App = () => (
  <div className="app-layout">
    <ColorBends
      className="pointer-events-none fixed inset-0 -z-10"
      autoRotate={2.4}
      speed={0.12}
      parallax={0.25}
      warpStrength={0.85}
      mouseInfluence={1.2}
      scale={1.2}
      colors={['#FF9AE2', '#7AE9FF', '#FFE29E', '#B69CFF', '#7EE8FF']}
    />
    <motion.main
      className="app-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <Hero />
    </motion.main>
    <BackgroundMusic />
  </div>
);

export default App;

