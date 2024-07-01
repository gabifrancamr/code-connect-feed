import CardPost from "@/components/CardPost";
import logger from "@/logger";
import React from "react";

import { remark } from "remark";
import html from "remark-html";

import styles from './page.module.css'
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug
      },
      include: {
        author: true
      }
    })

    if(!post) {
      throw new Error(`Post com slug ${slug} não foi encontrado`)
    }
  
    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();
  
    post.markdown = contentHtml;
  
    return post;
  } catch (error) {
    logger.error("Falha ao obter post com slug", {
      slug, 
      error
    })
  }
  redirect('/not-found')
}

const PagePost = async ({ params }) => {
  const slug = params?.slug;
  const post = await getPostBySlug(slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};

export default PagePost;
