import React from "react"
import { Link } from "react-router"
function Edit(){
    const [title,setTitle]=React.useState("")
    const [content,setContent]=React.useState("")
    let data=JSON.parse(localStorage.getItem("data"))
    let params=new URLSearchParams(window.location.search)
    let id=params.get("id")
    console.log(id)
    function handleClick(){
        data.map((dat)=>{
            if(dat.id==id){
                  dat.title=title
                  dat.content=content
            }
           
        })
        console.log(data,content)
       localStorage.setItem("data",JSON.stringify(data))
    }
    
    React.useEffect(()=>{data.map((dat)=>{
        if(dat.id==id){
             setTitle(dat.title)
             setContent(dat.content)
             console.log(dat.title)
        }
    })},[])
    return(
        <div className="create-note edit-note">
         <h2>Edit Your Note Here</h2>
         <label>Title</label><input placeholder="Enter Title"onChange={(e)=>setTitle(e.target.value)} value={title}></input>
         <label>Content</label><textarea placeholder="Enter Your content" onChange={(e)=>setContent(e.target.value)} value={content}></textarea>
         <Link to="/"><button onClick={handleClick}>Edit</button></Link>
        </div>
    )
}

export default Edit