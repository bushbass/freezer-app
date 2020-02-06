import React, { useState } from 'react';
import axios from 'axios';

function CreateForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateOnBag, setDateOnBag] = useState('');

  const onChangeName = event => setName(event.target.value);
  const onChangeDescription = event => setDescription(event.target.value);
  const onChangeDateOnBag = event => setDateOnBag(event.target.value);

  const onSubmitForm = event => {
    event.preventDefault();
    const newItem = {
      name,
      description,
      dateOnBag
    };
    console.log(newItem);
    axios
      .post('http://localhost:3001/items', newItem)
      .then(res => console.log(res.data));
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <h1>Add a new item</h1>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              placeholder='name'
              value={name}
              onChange={onChangeName}
            />
          </li>
          <li>
            <label>Description:</label>
            <input
              type='text'
              placeholder='description'
              value={description}
              name='description'
              onChange={onChangeDescription}
            />
          </li>
          <li>
            <label>Date On Bag: </label>
            <input
              type='text'
              placeholder='dateOnBag'
              value={dateOnBag}
              name='dateOnBag'
              onChange={onChangeDateOnBag}
            />
          </li>
        </ul>
        <button>Add Item</button>
      </form>
    </div>
  );
}

export default CreateForm;
