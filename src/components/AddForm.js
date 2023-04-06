import { useContext, useEffect, useState } from 'react';
import List from "./List";
import axios from 'axios';
import { ClassContext } from '../Context';

const AddForm = () => {
  const { user } = useContext(ClassContext);
  const [isEditing, setIsEditing] = useState(false);
  const [temp_id, setTemp_id] = useState(null);

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getContacts();
  },[])

  const getContacts = async () => {
    let config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    let response = await axios.get('https://firsthostedbackend-production.up.railway.app/contacts/all-contacts', config);
    if (response) {

      setContacts(response.data)
    }
  }
  const add = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    let response = await axios.post('https://firsthostedbackend-production.up.railway.app/contacts/create-contact', { name, contact }, config);
    if (response) {
      
      setName('')
      setContact('')
      await getContacts()
    } else {
      alert('something went wrong')
    }
  };


  
  const view = (item) => {
    alert(`
      Name = ${item.name}\n
      Contact = ${item.contact}
    `);
  };

  const edit = async (id) => {
    
    setTemp_id(id);
    let config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    try {
      let response = await axios.get(`https://firsthostedbackend-production.up.railway.app/contacts/get-contact/${id}`, config);

      if (response) {
        setIsEditing(true)
        setName(response.data[0].name)
        setContact(response.data[0].contact)
      }

    } catch (error) {
      console.error(error);

    }
  };

  const update = async (e) => {
     e.preventDefault();
    let config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    let response = await axios.patch(`https://firsthostedbackend-production.up.railway.app/contacts/update-contact/${temp_id}`, { name, contact }, config);
    if (response) {
      await getContacts()
      setIsEditing(false)
      setName('')
      setContact('')
      setTemp_id(null)
    } else {
      alert('something went wrong')
    }
  };

  const deleteItem = async (id) => {
    let config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    try {
      let response = await axios.delete(`https://firsthostedbackend-production.up.railway.app/contacts/delete-contact/${id}`, config);

      if (response) {
        await getContacts();
      }

    } catch (error) {
      console.error(error);

    }
  };

  
  return (
    <div className="col-md-6">
      <form onSubmit={isEditing ? update : add} >
        <div className="mb-2">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Enter Phone"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="btn btn-success"
          value={isEditing ? "Update" : "Save"}
        />
      </form>
      <List dir={contacts} delete={deleteItem} edit={edit} view={view} />
    </div>
  );
};

export default AddForm;
