import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <header className='container'>
            <h1 className={styles.tituloPrincipal}>Vamos calcular seu IMC!</h1>
            <h4 className={styles.subtitulo}>É só digitar sua altura (em metros) e seu peso (em quilos)</h4>
        </header>
    )
}

export default Cabecalho