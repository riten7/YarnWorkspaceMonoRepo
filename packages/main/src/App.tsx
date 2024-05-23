import './App.css';
import { App1 } from 'project';
import { App2 } from 'project2';

function App() {
  console.log('App');
  return (
    <div>
      <h1>Main Application</h1>
      <App1 />
      <App2 />
    </div>
  );
}

export default App;