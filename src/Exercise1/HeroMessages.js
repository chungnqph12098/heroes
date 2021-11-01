import React from 'react';
import './Message.css'

const HeroMessages = ({logger, handleClear}) => {
    return (
        <div className="messages">
            <h2>Messages</h2>
            <button
                className="clear"
                onClick={handleClear}
            >Clear messages</button>
            { logger.map( i => (
                <p>{i}</p>
            ))}
        </div>
    );
};

export default HeroMessages;