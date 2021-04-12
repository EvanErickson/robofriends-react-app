import React from 'react';

const Card = () => {
    return(
        <div className="bg-light-green br3 dib pa3 ma2 grow">
            <img src='https://robohash.org/test?200x200' alt='robots'/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;