import './App.css';
import SearchBar from './components/searchbar';
import data from './components/gifdata/gifs'
import Gif from './components/gif';

function App() {
  const Gifs = () => {
    return data.map(data => (data.rating === "g") &&
    <Gif key={data.id} url={data.url} title={data.title}/> )
  }

  return (
    <div className="App">
      <SearchBar label="Search" />
      <Gifs />
    </div>
  );
}

export default App;
