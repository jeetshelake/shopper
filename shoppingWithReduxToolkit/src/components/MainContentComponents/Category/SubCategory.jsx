import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SubCategory = () => {
// const [subdata, setSubData] = useState([])
//   useEffect(()=>{
//     axios.get('http://localhost:3001/categories/').then((response)=>console.log(response))
//   })
  return<>
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>category</th>
          <th>total items</th>
          <th>created at</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  </>
}

export default SubCategory