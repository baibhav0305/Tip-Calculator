import React from 'react'

function Icon(props) {
    return (
        <div className="icon" style={{ position: "relative", bottom: "35px", left: "13px" }}>
            <img src={props.img} alt="img" />
        </div>
    );
}

export default Icon;