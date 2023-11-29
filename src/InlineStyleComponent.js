import React, {useState} from "react";

const InlineStyleComponent = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    const style = {
        backgroundColor: isHovered ? 'lightblue' : 'lightgreen',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={style} onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >Hover Mee!</div>
    );
};

export default InlineStyleComponent;