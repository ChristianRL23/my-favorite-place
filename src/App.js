import './App.scss';
import MapView from './components/MapView/MapView';
import Sidebar from './layouts/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MapView />
    </div>
  );
}

export default App;
