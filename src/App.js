import './App.scss';
import MapView from './components/MapView/MapView';
import Sidebar from './layouts/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Sidebar />
        <MapView />
      </div>
    </div>
  );
}

export default App;
