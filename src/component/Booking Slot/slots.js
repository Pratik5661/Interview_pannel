import React from "react";

let Slots = () => {
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
                        <p>11:00AM</p>
                    </li>
                </ul>
           </div>
           </div>
            <div className="slots_header">
                
               <div className="seats">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="timing">10:00AM</div>
                                </td>
                                <td className="Row1">
                                    <div className="seat bg"></div>
                                    <div className="seat bg"></div>
                                    <div className="seat bg"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                </td>
                            </tr>
                            <br />
                            <br />
                            <tr>
                                <td>
                                    <div className="timing">10:30AM</div>
                                </td>
                                <td className="Row1">
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                </td>
                            </tr>
                            <br/>
                            <br />
                            <tr>
                                <td>
                                    <div className="timing">11:00AM</div>
                                </td>
                                <td className="Row1">
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                    <div className="seat"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               </div>
            </div>
        </>
    )
}

export default Slots

// display: inline-block;
