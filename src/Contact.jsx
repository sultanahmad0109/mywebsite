import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}, My Contact no. is ${data.phone}, My E-Mail is is ${data.email} and I want to say that "${data.message}"`
        );
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Me</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="form-label">FullName</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Phone"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}
                                    autoComplete="off"
                                ></textarea>
                            </div>
                            <div className="col-12 my-5">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit form
                </button>
                            </div>
                        </form>
                        <h3 className="mb-5">
                            My another website is :{" "}
                            <a href="http://sultanahmad0109.000webhostapp.com/" target="_">
                                sultanahmad0109.000webhostapp.com
              </a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
