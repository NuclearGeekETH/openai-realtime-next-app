// app/page.tsx
import React from 'react';
import { ConsolePage } from '../components/ConsolePage'; // Ensure the path to ConsolePage is correct
import '../styles/App.scss'; // Import your global styles

// Create the main page component
const HomePage: React.FC = () => {
  return (
    <div data-component="App">
      <ConsolePage />
    </div>
  );
};

export default HomePage;