import './index.scss';
import Header from './components/Header';
import MainRouter from './components/MainRouter';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>  
        <Header/>
        <MainRouter/>
    </AuthProvider>
  );
}

export default App;
