import Layout from './components/Layout';

import CardsList from './features/cards/CardsList';
import EmptyPage from './components/EmptyPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<CardsList />} />

        <Route path='/card'>
          <Route index element={<></>} />
          <Route path=':id' element={<EmptyPage />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
