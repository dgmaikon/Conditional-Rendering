import React from "react";

const Input = (props) => {
    return (
        <>
            <input type={ props.input } placeholder={ props.placeholder } />
        </>
    );
}

export default Input;