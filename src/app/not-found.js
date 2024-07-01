import styles from './not-found/notFound.module.css'
import image404 from './not-found/404.png'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBack } from '@/components/Icons/ArrowBack'
import { Heading } from '@/components/Heading'

const NotFound = () => {
  return (
    <div className={styles.container}>
        <Image src={image404} alt="Imagem de post não encontrado" />
        <Heading>Ops, página não encontrado!</Heading>
        <p className={styles.text}>você pode voltar ao feed e continuar buscando projetos incríveis</p>
        <Link href="/">
            <span>Voltar ao feed</span> <ArrowBack color='#81FE88' />
        </Link>
    </div>
  )
}

export default NotFound
