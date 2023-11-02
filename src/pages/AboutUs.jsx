import React from "react";
import Cod from "E:/KULIAH/MY DOCS/SEMESTER 5/PEM WEB/MODUL3/Demo/web_ilab/src/assets/aboutus.jpg";

function AboutUs() {
  return (
    <div>
      <div className="aboutus d-flex align-items-center justify-content-end">
        <div className="text-left p-3" style={{ marginLeft: "20px" }}>
          <h3>ABOUT I-LAB</h3>
          <br />
          <p>
            Laboratorium Teknik Informatika berfungsi sebagai pusat pembelajaran
            praktis dan eksperimental yang dipergunakan oleh mahasiswa dan
            pelayanan untuk riset dan konsultasi keteknikan mencakup desain
            sofware untuk animasi, administrasi, grafis dll.
          </p>
          <br />
          <p></p>
        </div>
        <img
          src={Cod}
          alt=""
          width={500}
          height={400}
          style={{ marginRight: "80px" }}
        />
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className="hero"
            style={{ marginTop: "40px", marginLeft: "40px" }}
          >
            <h2>Our Doing</h2>
            <p>
              1. Training Center 3. Provide training like CCNA training and
              Oracle Certification.
            </p>
            <p>2. Provide research room</p>
            <p>
              3. Provide training like CCNA training and Oracle Certification.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="hero mx-auto" style={{ marginTop: "40px" }}>
            <h2>LAB Course</h2>
            <p>Pemrograman Dasar</p>
            <p>Pemrograman Lanjut</p>
            <p>Pemrograman Berbasis Objek</p>
            <p>Struktur Data</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="hero"
            style={{ marginTop: "40px", marginRight: "40px" }}
          >
            <h2>Contact Us</h2>
            <p>
              Address: Jl. Raya Tlogomas No.246, Jawa Timur 65144, Indonesia
            </p>
            <p>
              Phone: (0341) 464318, ext 252 - SMS/WA/Telegram (Quick Response)
              +62 896-896-01317
            </p>
            <p>Email 1 : lab.informatika@umm.ac.id</p>
            <p>Email 2 : lab.informatika.umm@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
