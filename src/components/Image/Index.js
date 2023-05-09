import styles from "./Image.module.css";
import Loader from "../../components/Loader/Index";
import { useState } from "react";

const Image = ({ src, alt, closeModal, isLoading }) => {
  return (
    <div className={styles.qrContainer}>
      <div className="modal-overlay">
        <div className="modal">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <h2>Your QR</h2>
              <img
                src={URL.createObjectURL(src)}
                alt={alt}
                className={styles.image}
              />
              <button onClick={closeModal}>Close</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Image;
