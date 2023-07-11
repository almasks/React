import React from "react";
function MemoComp({name}){
    console.log("rendering memo")
    return(
        <div>
            MemoComponent {name}
        </div>
    )
}
export default React.memo(MemoComp)