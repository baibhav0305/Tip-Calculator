import React from 'react'

function Icon(props) {
    return (
        <div className="icon" style={{ position: "relative", bottom: "27px", left: "10px" }}>
            <img src={props.img} alt="img" />
        </div>
    );
}

export default Icon;