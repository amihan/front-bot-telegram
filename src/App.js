
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import EditAdvertisement from './components/EditAdvertisement';
import CreateAdvertisement from './components/CreateAdvertisement';


function App() {

  const { tg, onClose } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
    <button onClick={onClose}>Закрыть приложение</button>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreateAdvertisement/>} />
          <Route path={'edit'} element={<EditAdvertisement/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
