import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AuthContextProvider } from './context/context';
export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}


