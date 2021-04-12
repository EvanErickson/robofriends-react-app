import React from 'react';

const Card = (props) => {
    // const { name, id, email } = props;
    // If you wanted to just put in id or email or name instead of props.name

    // Or you could destructure the props in line 3 and put ({id, name, email}) instead of props 
    
    return(
        <div className="bg-light-green tc br3 dib pa3 ma2 grow">
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;