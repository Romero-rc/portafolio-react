
import { useState } from 'react';

import Header from './components/Header.jsx';
import About from './components/About.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import RecommendationsSection from './components/RecommendationsSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

import { initialRecommendations } from './data/portfolio.js';

function App() {
  const [recommendations, setRecommendations] =
    useState(initialRecommendations);

  function addRecommendation(newRecommendation) {
    setRecommendations((previousRecommendations) => [
      ...previousRecommendations,
      newRecommendation
    ]);
  }

  return (
    <>
      <Header />

      <main>
        <About />
        <SkillsSection />
        <ProjectsSection />

        <RecommendationsSection
          recommendations={recommendations}
        />

        <ContactForm
          onAddRecommendation={addRecommendation}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
