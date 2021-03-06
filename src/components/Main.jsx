import { useEffect, useState } from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Edit from "../pages/Edit"


function Main (props){
    const [bookmark, setBookmark] = useState(null)
    const URL = "https://bookmarked-backend2022.herokuapp.com/bookmark/"

    const getBookmark = async ()=>{
        const res = await fetch(URL)
        const data = await res.json()
        setBookmark(data)
    }

    const createBookmark = async (bookmark) =>{
        await fetch (URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(bookmark),
        })
        getBookmark()
    }

    const updateBookmark = async (bookmark, id) =>{
        await fetch (URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(bookmark)
        })
        getBookmark()
    }
    
    //DELETE ROUTE
    const deleteBookmark = async (id)=>{
        await fetch (URL + id,{
            method: "DELETE",
        })
        getBookmark()
    }
    
    useEffect(()=> {getBookmark()},[])
    return (
        <main>
            <Routes>
                <Route  path="/" 
                element={<Index 
                    bookmark={bookmark}
                    createBookmark={createBookmark}
                />}/>
                <Route path="/bookmark/:id" 
                element={<Edit 
                bookmark={bookmark} 
                updateBookmark={updateBookmark} 
                deleteBookmark={deleteBookmark}
                />}/>
            </Routes>
        </main>
    )
}

export default Main