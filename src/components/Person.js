import React from "react";
function Person({person}){
    return(
        <div>
            <h2>l am {person.name}. My age is {person.age} and I have skill in {person.skill}</h2>
        </div>
    )
}
export default Person