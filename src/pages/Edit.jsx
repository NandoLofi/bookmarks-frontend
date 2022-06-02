import { useParams, useNavigate } from 'react-router-dom'
import {useState} from "react"

function Edit (props){
    const {id} = useParams()
    const bookmark = props.bookmark
    const item = bookmark.find((i)=> i._id===id)
    let navigate = useNavigate()

    const [editForm, setEditForm] = useState(item)
    const handleChange = (event)=>{
        setEditForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        props.updateMenu(editForm, item._id)
        navigate("/")
    }
    const removeItem = ()=>{
        props.deleteBookmark(item._id)
        navigate("/")
    }

    return (
        <div className="updateItem">
            <h1>{item.name}</h1>
            <h3>{item.url}</h3>
            <button id="delete" onClick={removeItem}>DELETE</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Bookmark Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    value={editForm.url}
                    name="url"
                    placeholder="url link"
                    onChange={handleChange}
                    required
                />
                <input className="updateBtn" type="submit" value ="Update Bookmark"/>
            </form>
        </div>
    )
}

export default Edit