import Grid from './components/Grid';
import blocks from './defaults/blocks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid content={blocks}/>
    </div>
  );
}

export default App;
