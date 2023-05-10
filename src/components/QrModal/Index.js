import styles from "./QrModal.module.css";
import Loader from "../Loader/Index";

const Image = ({ src, alt, closeModal, isLoading, qrType }) => {
  return (
    <div className={styles.qrContainer}>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <h2>Your {qrType} QR</h2>
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
