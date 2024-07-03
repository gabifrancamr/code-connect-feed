import Image from "next/image";
import React from "react";
import Avatar from "../Avatar";
import styles from "./card.module.css";
import Link from "next/link";
import { incrementThumbsUp } from "@/actions";
import ThumbsUpButton from "./ThumbsUpButton";

const CardPost = ({ post, highlight }) => {

  const submitThumbsUp = incrementThumbsUp.bind(null, post)

  return (
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image src={post.cover} fill alt={`Capa do post: ${post.title}`} />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Ver detalhes
        </Link>
      </section>
      <footer className={styles.footer}>
        <div>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
          </form>
          <p>{post.likes}</p>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};

export default CardPost;
