
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './routes/UserRoutes';

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Routes>
      <Route path='/*' element={
        <UserRoutes/>
      }/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
