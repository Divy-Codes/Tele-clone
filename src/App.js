import { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import { CgDarkMode } from 'react-icons/cg';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleDarkMode = () => {
    // Trigger wave animation first
    const wave = document.getElementById('wave');
    wave.classList.add('wave-animate');

    // Toggle dark mode after animation
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      wave.classList.remove('wave-animate');
    }, 500); // Adjust timing as per your animation duration
  };

  return (
    <div className='app' data-theme={theme}>
      <div className='gridLeft'>
        <SideBar />
      </div>
      <div className='gridRight'>
        <Chat theme={theme} toggleDarkMode={toggleDarkMode} />
      </div>
      <div
        id='wave'
        className={`wave ${theme === 'light' ? 'darkTheme' : 'lightTheme'}`}
      ></div>
    </div>
  );
}

export default App;
