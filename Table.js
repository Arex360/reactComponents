import React from 'react'
import './Table.css'
import * as $ from 'jquery'
let Table = ({columns,children, width,center,height,bg})=>{
   let field = []
   let template = null
   for(let i=0;i < columns.length;i++){
       field.push(<div key={i}  className="head" style={{background: bg}}>{columns[i]}</div>)
       if(i==0){
           template = "1fr"
       }else{
           template = template + " 1fr"
       }
   }
   let style ={
       gridTemplateColumns: template,
       width: width,
       margin: center? "0 auto": null
   }
    return(
        <div className="main">
        <div className="table" style={style}>
            {field}
        </div>
        <div className="table fields" style={{
            ...style,
            maxHeight: height? height: ((window.innerHeight/100)*30)
        }}>
            {children}
        </div>
        </div>
    )
}
let Push = ({items})=>{
    let Items = []
    for(let i=0;i<items.length;i++){
    //   let cs = "item " + items[1]
       let inter = ''+items[1]
       let id = 'id'+i
        if(hasWhiteSpace(items[1])){
          inter = 'random' + Math.floor(Math.random()) + "num"+Math.floor(Math.random()*10)
       }
       Items.push(<div key={items[0]}
        onClick={()=>{
           $(`.${inter}`).css("background","blue")
           $(`.${inter}`).css("color","white")
       }}
       onMouseOver={()=>{
        $(`.${inter}`).css("background","red")
        $(`.${inter}`).css("color","white")
       }}
       onMouseLeave={()=>{
        $(`.${inter}`).css("background","whitesmoke")
        $(`.${inter}`).css("color","black")
       }}
       id={id} 
       className={"item " +inter}>{items[i]}</div>)
    }
    return Items
}
function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }
export default Table
export{
    Table,
    Push
}
