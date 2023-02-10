import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.scss'
import { Link } from "react-router-dom";


let BookingSlot = () => {
    return (
        <>
        <div className="shows_section">
           <div className="show_times">
                <ul>
                    <li className="active_time">
                        <p>10:00AM</p>
                    </li>
                </ul>
           </div>
           <div className="show_times">
                <ul>
                    <li className="active_time">
                        <p>10:30AM</p>
                    </li>
                </ul>
           </div>
           <div className="show_times">
                <ul>
                    <li className="active_time">
                        <p>12:00AM</p>
                    </li>
                </ul>
           </div>
        </div>
                <div className="main">
                <div className="border">
                        
                </div>
                    <li className="first_li">
                        <div className="tech">
                            <div className="course">React</div>
                        </div>
                        <div className="line">
                            
                        </div>
                       
                        <div className="time">
                            <div className="time_2"><Link><p>10:00AM</p></Link></div>
                            <div className="time_2"><Link>10:30AM</Link></div>
                            <div className="time_2"><Link>11:00AM</Link></div>
                            <div className="time_2"><Link>11:30AM</Link></div>
                            {/* <div className="time_2">10:00AM</div>
                            <div className="time_2">10:30AM</div>
                            <div className="time_2">11:00AM</div>
                            <div className="time_2">11:00AM</div> */}
                        </div>
                    </li>
                        <div className="border_bottom">
                        
                        </div>
                <div className="border">
                        
                </div>
                    <li className="first_li">
                        <div className="tech">
                            <div className="course">React</div>
                        </div>
                        <div className="line">
                            
                        </div>
                       
                        <div className="time">
                            <div className="time_2"><Link><p>10:00AM</p></Link></div>
                            <div className="time_2"><Link>10:30AM</Link></div>
                            <div className="time_2"><Link>11:00AM</Link></div>
                            <div className="time_2"><Link>11:00AM</Link></div>
                            {/* <div className="time_2">10:00AM</div>
                            <div className="time_2">10:30AM</div>
                            <div className="time_2">11:00AM</div>
                            <div className="time_2">11:00AM</div> */}
                        </div>
                    </li>
                        <div className="border_bottom">
                        
                        </div>
                        
                        <div className="border">
                        
                </div>
                    <li className="first_li">
                        <div className="tech">
                            <div className="course">React</div>
                        </div>
                        <div className="line">
                            
                        </div>
                       
                        <div className="time">
                            <div className="time_2"><Link to='/slots'><p>10:00AM</p></Link></div>
                            <div className="time_2"><Link>10:30AM</Link></div>
                            <div className="time_2"><Link>11:00AM</Link></div>
                            <div className="time_2"><Link>11:00AM</Link></div>
                            {/* <div className="time_2">10:00AM</div>
                            <div className="time_2">10:30AM</div>
                            <div className="time_2">11:00AM</div>
                            <div className="time_2">11:00AM</div> */}
                        </div>
                    </li>
                        <div className="border_bottom">
                        
                        </div>
                    </div>
        </>
    )
}

export default BookingSlot;
