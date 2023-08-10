import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const teste = process.env.TESTE
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          variaveis de ambiente: {teste}
        </p>
      </div>
    </main>
  )
}
