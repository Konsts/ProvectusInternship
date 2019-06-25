import React, { Component } from 'react';
import './contact.css';

const PATH = "https://formula-test-api.herokuapp.com/contact";

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        comment: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let object = {};
        data.forEach((value, key) => { object[key] = value });
        let jsonData = JSON.stringify(object);
        fetch(PATH, {
            method: 'POST',
            body: jsonData,
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    name: '',
                    email: '',
                    comment: '',
                })
            })
            .catch(error => console.error(error)
            );
    }
    render() {
        const { name, email, comment } = this.state;
        return (
            <div className="contact-form">
                <form onSubmit={this.handleSubmit}>
                    <h1>Contact us!</h1>
                    <input name="name" placeholder="Your name:" className="textbox" required value={name} onChange={this.handleChange} />
                    <input name="email" placeholder="Your Email:" className="textbox" type="email" required value={email} onChange={this.handleChange} />
                    <textarea rows="4" cols="50" name="comment" placeholder="Enter your message:" className="message" required value={comment} onChange={this.handleChange}></textarea>
                    <input name="submit" className="button" type="submit" value="Send" />
                </form>
            </div>
        )
    }
}
