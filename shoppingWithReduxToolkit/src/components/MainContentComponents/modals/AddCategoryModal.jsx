import { Button } from '@mui/material'
import React, { forwardRef } from 'react'

const AddCategoryModal = forwardRef(({},ref) => {
    return <dialog open ref={ref}>
        <h2>Are You Sure Want To delete!!</h2>
        <form method='dialog'>
            <button>s</button>
        </form>
    </dialog>
})

export default AddCategoryModal