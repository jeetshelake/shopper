import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import AddCircleIcon from '@mui/icons-material/AddCircle';
const AddMainCategory = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const backButton = () => {
        navigate(-1)
    }
    const addcat = () => {
        if(title&&description){
            axios.post('http://localhost:3001/products', { title, description })
            setTitle('')
            setDescription('')
            navigate(-1)
        }
        else{
           alert(1)
        }
    }
    const addtitle = (e) => setTitle(() => e.target.value)

    const adddesc = (e) => setDescription(() => e.target.value)
    return <>
       <ArrowBackIosIcon onClick={() => backButton()}></ArrowBackIosIcon>
        <br />
        <br />
        <h2>Title</h2>
        <TextField fullWidth  id="fullWidth" value={title} onChange={addtitle} />
        <br />
        <br />
        <h2>Description</h2>
        <TextField fullWidth  id="fullWidth" value={description} onChange={adddesc} sx={{height:'5%'}}/>
        <br />
        <br />
        <br />
        <Button variant="contained" onClick={addcat}>Add Category <AddCircleIcon/></Button>
        {/* {(title===""&&description==="")?<h3 style={{color:'red'}}>Field is Empty</h3>:<h1></h1>} */}
        


    </>
}

export default AddMainCategory