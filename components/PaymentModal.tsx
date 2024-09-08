import { inter } from "@/font";
import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import Modal from "react-modal";

interface PaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  paymentUrl: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onRequestClose,
  paymentUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Paystack Payment"
      className="modal "
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-full flex justify-between ">
          <h2 className={`text-[13px] text-[#3acc72] font-medium ${inter.className}`}>Complete your payment</h2>
          <button onClick={onRequestClose}><FaRegWindowClose className="text-[#ED6810]"/></button>
        </div>
        <iframe
          src={paymentUrl}
          width="100%"
          height="500"
          // frameBorder="0"
          title="Paystack Payment"
        />
      </div>
      
    </Modal>
  );
};

export default PaymentModal;
