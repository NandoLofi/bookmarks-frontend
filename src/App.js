import './App.css';
import Header from './components/Header'
import {useState, useEffect} from 'react'
import Main from './components/Main';

function App() {
  const [state, setState] = useState()

useEffect(()=>{
  async function getBookmarks(){
    try{
      let mark = await fetch ('https://bookmarked-backend2022.herokuapp.com/bookmark')
      .then(res=> res.json())
      setState(mark)

    }catch(err){
      console.log(err)
    }
  }
})

function addBookmark(evt){
  evt.preventDefault();
  
}


  return (
    <div className="App">
      <Header />

    </div>
  );
}

export default App;
