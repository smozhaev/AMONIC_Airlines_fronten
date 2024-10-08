import './App.css';
import MainRouter from './components/MainRouter';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <MainRouter/>
    </AuthProvider>
  );
}

export default App;
