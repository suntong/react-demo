import './App.css';
import Welcome from './components/Welcome'

function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const name = queryParams.get("name")

  return (
    <div className="App">
        {name ? (<Welcome name={name} />) : "Name Needed!"}
    </div>
  );
}

export default App;
