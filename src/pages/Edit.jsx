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
        props.updateBookmark(editForm, item._id)
        navigate("/")
    }
    const removeItem = ()=>{
        props.deleteBookmark(item._id)
        navigate("/")
    }

    return (
        <div className="m-3">
            <h1>{item.name}</h1>
            <h3>{item.url}</h3>
            <button className="btn btn-danger" onClick={removeItem}>DELETE</button>
            <form className="form-group row m-5" onSubmit={handleSubmit}>
                <input className="form-label mt-4"
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Bookmark Name"
                    onChange={handleChange}
                    required
                />
                <input className="form-label mt-4"
                    type="text"
                    value={editForm.url}
                    name="url"
                    placeholder="url link"
                    onChange={handleChange}
                    required
                />
                <input className="btn btn-primary mt-3" type="submit" value ="Update Bookmark"/>
            </form>
        </div>
    )
}

export default Edit