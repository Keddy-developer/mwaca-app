import React from "react";
import CountUp from 'react-countup';

export default function Achievements(){
    return (
        <div className="achievement-container">
        <h4>What We Do</h4>
        <h3 className="achievement-title">Our Achievements at a Glance</h3>
        <div className="achievement-card-container" >
              <div className="counter-item">
                <h2><CountUp end={3} duration={2} separator="," />K+</h2>
                <p>Large Printing</p>
            </div>
            <div className="counter-item">
                <h2><CountUp end={2} duration={2} separator="," />K+</h2>
                <p>Digital Printing</p>
            </div>
            <div className="counter-item">
                <h2><CountUp end={7} duration={2} separator="," />K+</h2>
                <p>Graphic Design</p>
            </div>
            <div className="counter-item">
                <h2><CountUp end={11} duration={2} separator="," />K+</h2>
                <p>Nation-wide Customers</p>
            </div>
          </div>
        <div>

        </div>
    </div>
    )
}