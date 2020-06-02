import React from 'react'
let Wrapper = ({center,circle,margin, padding, border,borderRadius, 
                borderColor,mt,mb,ml,mr,pl,pr,pt,pb,bthickeness,
                color,width,height,display,pos,bg,className,children,
                onTap,mouseEnter,mouseExit,animate,dur, animation , 
                alignItem, justifyContent,shadow}) =>{
    let style = {
        color: color,
        width: width,
        height: height,
        display: display + "!important",
        position: pos,
        background: bg,
        margin: margin,
        padding: padding,
        border: border? borderColor? bthickeness? borderColor + " solid " +bthickeness+"px": borderColor + " solid " + "1px": "black solid 1px": null,
        borderRadius: borderRadius,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
        paddingBottom: pb,
        overflow: "hidden",
        boxShadow: shadow
    }
    if(animate){
        dur = dur.includes("s")? dur: dur+"s"
        let transition = dur? dur: "0.7s"
        let anime = animation? animation: null 
        style = {
            ...style,
            transition: transition
        }
    }
    if(circle){
        style = {
            ...style,
            borderRadius: "50%"
        }
    }
    if(alignItem){
        style = {
            ...style,
            display: "flex",
            alignItems: alignItem
        }
    }
    if(justifyContent){
        style = {
            ...style,
            display: "flex",
            justifyContent: justifyContent
        }
    }
    if(center){
        style = {
            ...style,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return <div onMouseEnter={mouseEnter} mouseExit={mouseExit} onClick={onTap} className={className} style={style}>{children}</div>
}
export default Wrapper
