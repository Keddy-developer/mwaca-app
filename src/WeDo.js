import React from "react";
import WeDoData from "./WeDoData";

export default function WeDo(){
    return (
        <div className="we-do-container">
            <h3>What We Do</h3>
            <h4 className="we-do-title">Your Business’s Next Great Idea Starts Here</h4>
            <div className="we-do-card-container" >
             {WeDoData.map( (item, index) => {
                return <div className="we-do-card" key={index}>
                <img src={item.image} width="150px"/>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
             })}
              </div>
            <div>

            </div>
        </div>
    )
}