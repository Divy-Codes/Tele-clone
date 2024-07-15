import { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Chat from './components/chat/Chat';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className='app' data-theme={theme}>
      <div className='gridLeft'>
        <SideBar />
      </div>
      <div className='gridRight'>
        <Chat />
      </div>
    </div>
  );
}

export default App;
