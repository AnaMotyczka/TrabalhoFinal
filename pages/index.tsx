import Image from 'next/image'
import styles from '../styles/Home.module.css';
import imgapa from '../img/onca.png';

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

      <Image className={styles.imagem}
      src={imgapa}
      alt="Imagem da capa"
    />       

        <div className={styles.grid}>
          <a href="products" className={styles.card}>
            <h2>Produtos</h2>
          </a>

        </div>
      </main>
    </div>
  )
}
