import React from "react";

function Contact() {
  return (
    <div>
      <style jsx>{`
        form {
          margin: 40px auto;
          background-color: rgba(100, 100, 100, 0.5);
          border-radius: 10px;
          width: 60%;
          padding: 20px;
        }
        input {
          width: 100%;
          height: 40px;
        }
        textarea {
          width: 100%;
        }
        label {
          font-size: 18px;
          color: white;
        }
        button {
          width: 100%;
          height: 40px;
          margin-top: 20px;
        }
      `}</style>
      <form>
        <label>Name</label>
        <fieldset>
          <input type="text"></input>
        </fieldset>
        <label>Email</label>
        <fieldset>
          <input type="text"></input>
        </fieldset>
        <label>Subject</label>
        <fieldset>
          <input type="text"></input>
        </fieldset>
        <label>Message</label>
        <fieldset>
          <textarea rows="3"></textarea>
        </fieldset>

        <button className="btn btn-dark" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
export default Contact;
