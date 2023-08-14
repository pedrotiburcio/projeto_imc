import { useEffect, useState } from "react";

import styles from './Formulario.module.css'

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calculaIMC = () => {
        return (peso / (altura ** 2)).toFixed(2);
    }

    const classificaIMC = (imc) => {
        if (imc < 18.5) {
            return 'Abaixo do peso'
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            return 'Peso Ideal'
        }
        else if (imc > 24.9 && imc <= 29.9) {
            return 'Sobrepeso'
        }
        else if (imc > 29.9 && imc <= 34.9) {
            return 'Obesidade'
        }
        else if (imc > 34.9 && imc <= 39.9) {
            return 'Obesidade Severa'
        }
        else {
            return 'Obesidade Mórbida'
        }
    }

    const imcEValido = () => {
        return altura != 0 && peso != 0;
    }

    const renderizaResultado = () => {
        const imc = calculaIMC()
        const classificacao = classificaIMC(imc)
        if (imcEValido()) {
            return (
                <div className={styles.resultado}>
                    <span className={styles.resultadoItem}>Seu IMC: {imc}</span>
                    <span className={styles.resultadoItem}>Classificação: {classificacao}</span>
                </div>
            )
        }
    }

    return (
        <form className="container">
            <div className={styles.dados}>
                <input className={styles.dadosItem} type="number" placeholder="Sua altura (Ex: 1.70)" onBlur={e => setAltura(e.target.value)} />
                <input className={styles.dadosItem} type="number" placeholder="Seu Peso (Ex: 70)" onBlur={e => setPeso(e.target.value)} />
            </div>
            {renderizaResultado()}

        </form>
    )

}

export default Formulario