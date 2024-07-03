"use client";

import { useRef } from "react";


import styles from "./modalReply.module.css";
import { postReply } from "@/actions";
import Modal from "../Modal";
import Comment from "../Comment";
import { Textarea } from "../Textarea";
import { SubmitButton } from "../SubmitButton";


export const ReplyModal = ({ comment, post }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const action = postReply.bind(null, comment);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
};
