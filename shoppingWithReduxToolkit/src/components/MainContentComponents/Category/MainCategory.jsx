import React, { useEffect, useRef, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'
import AddCategoryModal from '../modals/AddCategoryModal';
const MainCategory = () => {
  const [data, setData] = useState([])
  const [sure, setSure] = useState(false)
  const refs = useRef()
  useEffect(() => {

    axios.get('http://localhost:3001/products')
      .then((response) => response.data)
      .then((res) => setData([...res]))
    console.log('renders');

  }, [])

  const deletelist = (id) => {
    // setSure((value)=>!value)
    refs.current.showModal()
   
      axios.delete(`http://localhost:3001/products/${id}`)
      setData((data) => data.filter((value) => {
        console.log('rendersx');
        return value.id !== id
      }))
    
  }
  const adddata = (id) => {
    alert(id)
  }
  console.log('renders');

  return <>
   <AddCategoryModal ref={refs}/>
    <div style={{ textAlign: 'left' }}>
      <table border={5}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return <tr key={value.id}>
              <td><img src={value.thumbnail} alt="" style={{ height: 100, width: 100, borderRadius: 50 }} /></td>
              <td>{value.title}</td>
              <td>{value.description}</td>
              <td>
                <button onClick={() => deletelist(value.id)}><DeleteOutlineIcon /></button>
                <button onClick={() => { adddata(value.id) }}><EditIcon /></button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </>


}

export default MainCategory