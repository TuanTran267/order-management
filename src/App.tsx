import './App.css';
import './assets/style/style.css';

//Components
import Table from 'components/table';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <Table />
        </div>
      </header>
    </div>
  );
}

export default App;
