"use client";

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Chat } from "../Icons/Chat";
import Modal from "../Modal";
import { SubmitButton } from "../SubmitButton";
import styles from "./modalComment.module.css";
import { Subheading } from "../SubHeading";
import { Textarea } from "../Textarea";

export const ModalComment = ({action}) => {
  const modalRef = useRef(null);
  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
