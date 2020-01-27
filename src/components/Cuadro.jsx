import React from 'react'

export const Cuadro = (props) => {
    let style = {
        width: props.width,
        height: props.height,        
    }

    return (
        <div style={style} className="cuadro" onClick={props.accion} id={props.id}>
            {/* {props.children} */}
        </div>
    )
}
