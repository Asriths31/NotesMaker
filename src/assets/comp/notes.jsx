import editLogo from "../img/edit.png"
import deleteLogo from "../img/delete.png"
import { Link } from "react-router"
import React from "react"
import add from "../img/add.png"
function Notes(){
    let [data,setData]=React.useState([])
    let notesss
     console.log(JSON.parse(localStorage.getItem("data")))
    if((JSON.stringify(data)!==JSON.stringify(JSON.parse(localStorage.getItem("data"))))){
      setData(JSON.parse(localStorage.getItem("data")))
      }
    
      if(data===null||data.length===0){
      notesss=<div className="empty"><Link to="/create"><p >Add Any Note</p><img src={add}></img></Link></div>
      // localStorage.setItem("data",JSON.stringify([]))
      }
    else{ notesss=data.map(data=>{
           return(
           
           <div className="notes-block" key={data.id}>
              <div className="content">
                <Link to={`/edit?id=${data.id}`}><p>{data.content}</p></Link>
              </div>
              <div className="title">
                  <h2>{data.title}</h2>
                  <div>
                  <Link to={`/edit?id=${data.id}`}><img alt="edit-note" src={editLogo}></img></Link> 
                  <img alt="delete" src={deleteLogo} onClick={()=>{handleDelete(data.id)}}></img>
                  </div>
               </div>

           </div>)

      

    })}

   
    
    function handleDelete(id){
        //  console.log(id)
         data.map((dat,index)=>{
          if(dat.id===id){
            setData(data.splice(index,1))

          }
         })
          localStorage.setItem("data",JSON.stringify(data))
          console.log("delete")
    } 
    
    
    return(
        <>
        <div className="body">
        <header>
          <p>Notes Maker</p>
        </header>
        <div className="notes-body">{notesss}</div>
        {data===null||data.length===0?<span style={{display:"none"}}></span>:
        <Link to="/create">
          <div className="create-btn">
          <button><img src={add}></img><p>Create new note</p></button>
          </div>
        </Link>
        }
        </div>
        </>
    )
}

export default Notes