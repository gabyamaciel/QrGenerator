import { useState } from "react";

import Input from "../../components/Input/Index";
import FormURL from "../../components/FormURL/Index";
import FormVCard from "../../components/FormVCard/Index";
import FormWiFi from "../../components/FormWiFi/Index";
import Loader from "../../components/Loader/Index";
import Image from "../../components/Image/Index";
import { fetchQRBlob } from "../../services/GenerateQRService";

import styles from "./CreateQr.module.css";

const FormTypes = {
  url: "url",
  wifi: "wifi",
  vcard: "vcard"
};

const getFormType = (type, onSubmit) => {
  switch (type) {
    case FormTypes.url:
      return <FormURL handleOnSubmit={onSubmit} />;
    case FormTypes.wifi:
      return <FormWiFi handleOnSubmit={onSubmit} />;
    case FormTypes.vcard:
      return <FormVCard handleOnSubmit={onSubmit} />;
    default:
      return null;
  }
};

const CreateQr = () => {
  const [qr, setQr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setQr(null);
  };

  async function loadImage(incomingPayload) {
    setIsLoading(true);
    setOpenModal(true);
    setQr(null);
    const blob = await fetchQRBlob(incomingPayload);
    setQr(blob);
    setIsLoading(false);
  }

  const handleOnSubmit = (incomingPayload) => {
    // llamo a mi API y en base al resultado yo pongo el QR
    loadImage(incomingPayload);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <h1 className={styles.title}>QR Generator</h1>
      <div className={styles.container}>
        <h3>Generate QR by: </h3>
        <div className={styles.radioButtonContainer}>
          <Input
            name="options"
            type="radio"
            label="Standard URL"
            value={FormTypes.url}
            handleChange={handleOptionChange}
            labelPosition="after"
          />
          <Input
            name="options"
            type="radio"
            label="WiFi Login"
            value={FormTypes.wifi}
            handleChange={handleOptionChange}
            labelPosition="after"
          />
          <Input
            name="options"
            type="radio"
            label="VCard Business Card"
            value={FormTypes.vcard}
            handleChange={handleOptionChange}
            labelPosition="after"
          />
        </div>
        {getFormType(selectedOption, handleOnSubmit)}
        {openModal && (
          <Image
            src={qr}
            alt="QR"
            closeModal={handleCloseModal}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default CreateQr;
