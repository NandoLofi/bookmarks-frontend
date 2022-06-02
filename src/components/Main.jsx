import { useEffect, useState } from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Bookmark from "../pages/Bookmark"
import New from "../pages/New"

function Main (props){
    const [bookmark, setBookmark] = useState(null)
    const URL = "https://bookmarked-backend2022.herokuapp.com/bookmark"

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
                />}/>
                <Route path="/bookmark/:id" 
                element={<Bookmark 
                bookmark={bookmark} 
                updateBookmark={updateBookmark} 
                deleteBookmark={deleteBookmark}
                />}/>
                <Route path="/new"
                element={<New 
                createBookmark={createBookmark}
                />}/>
            </Routes>
        </main>
    )
}

export default Main