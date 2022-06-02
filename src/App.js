import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Bookmark from './pages/Bookmark';
import Index from './pages/Index';
import New from './pages/New';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Bookmark/>
      <Index />
      <New />

    </div>
  );
}

export default App;
