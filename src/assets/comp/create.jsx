import React from "react"
import { Link } from "react-router"
import backLogo from "../img/arrow.png"

function CreateNote(){
    const[title,setTitle]=React.useState()
    const[content,setContent]=React.useState()
    let data=JSON.parse(localStorage.getItem("data"))
    function handleCreation(){
        let note={
            id:Math.round(Math.random()*1000),
            title:title,
            content:content
        }
        if(data===null){
            data=[note]
        }
        else{
        data.push(note)
        }
        localStorage.setItem("data",JSON.stringify(data))
        // console.log(data,"iisunvnvin ")
    } 
    return(
        <>
        <div className="create-note">
            <Link to="/"><img className="back-btn" src={backLogo}></img></Link>
            <h2>Create Your Note Here</h2>
            <label>Title</label><input placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}></input>
            <label>Content</label><textarea placeholder="Enter Your content" onChange={(e)=>setContent(e.target.value)}></textarea>
            <Link to="/"><button onClick={handleCreation}>Create Note</button></Link>
        </div>
        
        </>
    )
}

export default CreateNote