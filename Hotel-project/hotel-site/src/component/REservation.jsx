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

        seterror("");
        setmsg("");

        if (!formdata.name || !formdata.phone || !formdata.date || !formdata.time || !formdata.people) {
            seterror("All fields are required");
            return;
        }

        try {

            await authentication.creatacount({
                ...formdata,
                people: String(formdata.people)
            });

            const formDataToSend = new FormData();
            for (let key in formdata) {
                formDataToSend.append(key, formdata[key]);
            }

            await fetch(googleUrl, {
                method: "POST",
                body: formDataToSend,
                mode: "no-cors",
            });


            setmsg("Reservation submitted successfully!");


            setformdata({
                name: "",
                phone: "",
                date: "",
                time: "",
                people: "",
                wish: ""
            });

        } catch (err) {

            console.error("Reservation error:", err);
            seterror("Something went wrong. Try again.");
        }
    }


    return (
        <Element name='reservation' className='res-sec'>
            <div className="reservation-container App">
                <h1>Reserve Your Table</h1>
                <form onSubmit={hanssubmit} className="container reservation-form">
                    <div className="row gy-4">
                        <div className="col-12 col-md-6">
                            <label htmlFor="name" className="form-label">Enter Name :</label>
                            <input
                                type="text"
                                name="name" 
                                id="name"
                                onChange={handchange}
                                value={formdata.name}
                                className="form-control border-orange"
                                placeholder="Enter Name Here"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="mobile" className="form-label">Enter Mobile No :</label>
                            <input
                                type="tel"
                                id="mobile"
                                name="phone"
                                onChange={handchange}
                                value={formdata.phone}
                                className="form-control border-orange"
                                placeholder="Enter Number Here"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="date" className="form-label">Enter your Date :</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                onChange={handchange}
                                value={formdata.date}
                                className="form-control border-orange"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="tm" className="form-label">Enter Time :</label>
                            <input
                                type="time"
                                id="tm"
                                name="time"
                                onChange={handchange}
                                value={formdata.time}
                                className="form-control border-orange"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="count" className="form-label">Enter Persons :</label>
                            <input
                                type="text"
                                id="count"
                                name="people"
                                onChange={handchange}
                                value={formdata.people}
                                className="form-control border-orange"
                                placeholder="Number of People"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="write" className="form-label">Your Special request :</label>
                            <input
                                type="text"
                                id="write"
                                name="wish"
                                onChange={handchange}
                                value={formdata.wish}
                                className="form-control border-orange"
                                placeholder="Enter your request"
                            />
                        </div>

                        <div className="col-12 text-center">
                            <input
                                type="submit"
                                value="Reserve"
                                className="btn btn-success px-5 mt-3"
                            />
                        </div>
                    </div>
                </form>


                {msg && <p className="success-message">{msg}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>

        </Element>
    );
}

export default REservation
