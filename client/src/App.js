import React from 'react';
import './App.css';
import CreateForm from './components/createForm';
import FullList from './components/fullList';

class App extends React.Component {
  state = {
    list: [
      {
        _id: '5d347b004b0c201108909a55',
        name: 'hot dogs',
        description: 'costco dogs',
        dateOnBag: '3/4/19',
        __v: 0
      }
    ]
  };
  componentDidMount() {
    fetch('http://localhost:3001/api/items')
      .then(response => response.json())
      .then(data => {
        this.setState({ list: data });
        console.log(data);
      });
  }
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
