import React from "react";
import Cont from "E:/KULIAH/MY DOCS/SEMESTER 5/PEM WEB/MODUL3/Demo/web_ilab/src/assets/contact.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="row">
        <div className="col-md-5">
          {" "}
          {/* Bagian kiri */}
          <img
            src={Cont}
            alt=""
            width={600}
            height={500}
            style={{ marginLeft: "30px", marginRight: "0" }}
          />
        </div>
        <div className="col-md-6">
          {" "}
          {/* Bagian kanan */}
          <div className="text-center">
            <br />
            <h1>Send Message</h1>
          </div>
          <br />
          <form>
            <div
              className="form-group"
              style={{ marginLeft: "40px", marginBottom: "30px" }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                style={{ background: "rgb(161, 161, 161)" }}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "40px", marginBottom: "30px" }}
            >
              <label htmlFor="studentId">NIM</label>
              <input
                type="text"
                id="studentId"
                className="form-control"
                style={{ background: "rgb(161, 161, 161)" }}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: "40px", marginBottom: "30px" }}
            >
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control"
                style={{ background: "rgb(161, 161, 161)" }}
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "rgb(161, 161, 161)", // Atur warna latar belakang tombol
                color: "black", // Atur warna teks tombol (misalnya, putih)
                marginLeft: "40px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
