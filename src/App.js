import logo from './logo.svg';
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import db from './db';



function App() {
  const getData = async () => {
    const users = collection(db, 'users');
    const collectionData = await getDocs(users);
    const data = collectionData.docs.map((doc) => doc.data());
    console.log(data);
    return users;
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
