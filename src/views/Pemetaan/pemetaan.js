import React from "react";
import { Helmet } from "react-helmet";
import "./pemetaan.css"; // Style lokal
import financeImage from "./images/peta.png";

function Pemetaan() {
  return (
    <>
      {/* Inject Bootstrap CSS & Icons ONLY for this component */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUa6mY2D1QtnUOHjz4+2d54GKdOEN5eS1X4tIhFg7SwBv5V8dohcfB5l1YQ2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </Helmet>

      {/* Judul dan Gambar */}
      <div className="container text-center py-5 my-5">
        <h2 className="mb-4 fw-bold" style={{fontSize:"50px", textAlign:"center"}}>Peta Wilayah Dusun Dokgarut</h2>
        <img
          src={financeImage}
          alt="Peta Wilayah"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "", width: "90%", padding:"20px" }}
        />
      </div>
    </>
  );
}

export default Pemetaan;
