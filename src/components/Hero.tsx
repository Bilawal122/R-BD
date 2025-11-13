import { motion } from 'framer-motion';
import { heroContent } from '../data';
import ElectricBorder from './ElectricBorder';
import GradientText from './GradientText';
import StarBorder from './StarBorder';

const Hero = () => (
  <motion.section
    className="section hero"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="hero-copy">
      <h1 className="hero-title">
        <GradientText
          className="hero-title-gradient"
          colors={['#FF9AE2', '#7AE9FF', '#FFE29E', '#B69CFF']}
          animationSpeed={14}
        >
          Happy Birthday, {heroContent.name}!
        </GradientText>
      </h1>
      <p className="hero-message">{heroContent.message}</p>

      <div className="hero-highlights">
        {heroContent.highlightPills.map((pill) => (
          <StarBorder
            as="span"
            key={pill}
            className="hero-pill"
            color="rgba(255, 240, 198, 0.9)"
            speed="7s"
            thickness={1}
          >
            {pill}
          </StarBorder>
        ))}
      </div>

      <ElectricBorder className="hero-note-shell" color="#FFE29E" speed={1.4} chaos={0.8} thickness={2}>
        <div className="hero-note">
          <GradientText
            as="h2"
            className="hero-note-title"
            colors={['#FFE29E', '#FF9AE2', '#B69CFF']}
            animationSpeed={18}
          >
            {heroContent.noteTitle}
          </GradientText>
          <p>{heroContent.noteBody}</p>
        </div>
      </ElectricBorder>
    </div>

    <motion.div
      className="hero-media"
      initial={{ scale: 0.92, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <div className="hero-photo-frame">
        <div className="hero-photo" role="img" aria-label={`Favourite photo of ${heroContent.name}`} />
      </div>
    </motion.div>
  </motion.section>
);

export default Hero;

