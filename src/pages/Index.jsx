import { useState } from "react"
import { Link } from "react-router-dom"



export default function Index (props){
    const [newForm, setNewForm] = useState({
        name: "",
        url: "",
    })
    const handleChange = (event)=>{
        setNewForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.createBookmark(newForm)
        setNewForm({
            name: "",
            url: "",
        })
    }

    const Loaded = ()=>{
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <legend>Create New Bookmark</legend>
                    <label htmlFor="name">Name</label>
                    <input className="form-label m-2" type ="text" name="name" value={newForm.name} onChange={handleChange} required/>
                    <label htmlFor ="url"> Url</label>
                    <input className="form-label m-2" type ="text" name="url" value ={newForm.url} onChange={handleChange} required/>
                    <input className="btn btn-primary" type ="submit" value="create bookmark"/>
                    </fieldset>
                   {props.bookmark.map((bookmark)=>(
            <div className="m-4" key ={bookmark._id}>
               <h3><a href={bookmark.url}>{bookmark.name} </a> 
              <Link to ={`/bookmark/${bookmark._id}`}>  
              <button type="button" className="btn btn-primary btn-sm ml-2">update</button>
              </Link> </h3>
            </div>

))
} 
                </form>
            </div>
        )
    }


    const loading = ()=>{
        return <h1> Loading...</h1>
    }

  return props.bookmark ? Loaded() : loading()
}
