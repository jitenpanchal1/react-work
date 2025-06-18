import React, { useState } from 'react'
import authentication from '../configuration/auth'
import "../css/Authentication.css"
import { Element } from 'react-scroll'
import "../css/Cmn.css"



function REservation() {

    const [formdata, setformdata] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        people: "",
        wish: ""
    })

    const googleUrl = "https://script.google.com/macros/s/AKfycby1BXadMDVB7DNisV72kpDjYJB0o660O0syP9TMHr20_aBlyAV1Yjk8swJgBasCtznw/exec"
    const [msg, setmsg] = useState("")
    const [error, seterror] = useState("")

    const handchange = (e) => {
        setformdata((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const hanssubmit = async (e) => {
        e.preventDefault();

        seterror(""); // clear previous errors
        setmsg("");   // clear previous success 

        if (!formdata.name || !formdata.phone || !formdata.date || !formdata.time || !formdata.people) {
            seterror("All fields are required");
            return;
        }

        try {
            // Optional: Appwrite authentication logic
            await authentication.creatacount({
                ...formdata,
                people: String(formdata.people)
            });

            const formDataToSend = new FormData();
            for (let key in formdata) {
                formDataToSend.append(key, formdata[key]);
            }

            // Submit to Google Apps Script, but catch CORS silently
            await fetch(googleUrl, {
                method: "POST",
                body: formDataToSend,
                mode: "no-cors", // IMPORTANT: stops CORS error from crashing app
            });

            // Show success (even though we can't confirm from response due to no-cors)
            setmsg("Reservation submitted successfully!");

            // Clear form
            setformdata({
                name: "",
                phone: "",
                date: "",
                time: "",
                people: "",
                wish: ""
            });

        } catch (err) {
            // Log full error in console for developer
            console.error("Reservation error:", err);
            seterror("Something went wrong. Try again.");
        }
    }


    return (
        <Element name='reservation'>
            <div className="reservation-container App">
                <h1>Reserve Your Table</h1>
                <form onSubmit={hanssubmit} className="text-center reservation-form">
                    <div>
                        <label className='me-3' htmlFor="name">Enter Name :</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handchange}
                            value={formdata.name}
                            placeholder="Enter Name Here"
                        />
                    </div>
                    <div>
                        <label className='me-3' htmlFor="mobile">Enter Mobile No :</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="phone"
                            onChange={handchange}
                            value={formdata.phone}
                            placeholder="Enter Number Here"
                        />
                    </div>
                    <div>
                        <label className='me-3' htmlFor="date">Enter your Date :</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            onChange={handchange}
                            value={formdata.date}
                        />
                    </div>
                    <div>
                        <label className='me-3' htmlFor="tm">Enter Time :</label>
                        <input
                            type="time"
                            id="tm"
                            name="time"
                            onChange={handchange}
                            value={formdata.time}
                        />
                    </div>
                    <div>
                        <label className='me-3' htmlFor="count">Enter Persons :</label>
                        <input
                            type="text"
                            id="count"
                            name="people"
                            onChange={handchange}
                            value={formdata.people}
                            placeholder="Number of People"
                        />
                    </div>
                    <div>
                        <label className='me-3' htmlFor="write">Your Special request :</label>
                        <input
                            type="text"
                            id="write"
                            name="wish"
                            onChange={handchange}
                            value={formdata.wish}
                            placeholder="Enter your request"
                        />
                    </div>
                    <div>
                        <input type="submit" value="Reserve" />
                    </div>
                </form>
                {msg && <p className="success-message">{msg}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>
        </Element>
    );
}

export default REservation
