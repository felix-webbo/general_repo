import "./ContactFormStyle.css";

const ContactForm = () => {
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form action="/contact" method="post">
                <div>
                    <input type="text" name="Name" required/>
                    <label for="Name">Full Name</label>
                </div>

                <div>
                    <input type="email" name="Email" required/>
                    <label for="Email">Email Address</label>
                </div>

                <div>
                    <input type="text" name="subject" required/>
                    <label for="subject">Subject</label>
                </div>

                <textarea placeholder="Message" rows="4"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;