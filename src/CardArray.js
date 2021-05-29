import React from 'react';
import Card from './Card';
const CardArray = ({robots}) =>{
     
    const cardarray = robots.map((user,i) => {
        return (
        <Card 
        key={robots[i].username} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        username={robots[i].username}
        />
        )
    })

    return(
        <div>          
        {cardarray}
        </div>  
    );
}

export default CardArray;