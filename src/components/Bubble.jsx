import React, {useState} from "react";

function Bubble({content}){
    const [showMore, setShowMore] = useState(false);

    return(
        <div className="main-bubble">
            <h3>{content.main}</h3>
            {showMore ? <div>
                    <p className="home_more_info">{content.detail}</p>
                    <p className="small_text default" onClick={()=> {setShowMore(false)}}>back</p>
                </div> :
                        <p className="small_text default" onClick={()=> {setShowMore(true)}}>Learn more</p>
            }
        </div>
    )
}

export default Bubble;