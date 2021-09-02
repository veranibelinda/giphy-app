import './App.css';
import SearchBar from './components/searchbar';
import gif from './components/gifdata/gif';
import Gif from './components/gif';

function App() {
  return (
    <div className="App">
      <SearchBar label="Search" />
      <Gif url={gif.url} title={gif.title}/>
    </div>
  );
}

export default App;
