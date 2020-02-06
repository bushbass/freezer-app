import React from 'react';
import './App.css';
import CreateForm from './components/createForm';
import FullList from './components/fullList';

class App extends React.Component {
  componentDidMount() {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => this.setState({ list: data }));
  }
  state = {
    list: []
  };
  render() {
    return (
      <div
        className='App'
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column'
        }}
      >
        <div>
          <FullList freezerData={this.state.list} />
        </div>
        <div>
          <CreateForm />
        </div>
      </div>
    );
  }
}

export default App;
