import tab from './Tabela.module.css';

const Tabela = () => {
    return (
        <table className='container' cellSpacing="0">
            <thead>
                <tr>
                    <th className={tab.textoCabecalho}>IMC (kg/m2)</th>
                    <th className={tab.textoCabecalho}>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={tab.textoLinhas}>Abaixo de 18,5</td>
                    <td className={tab.textoLinhas}>Abaixo do peso</td>
                </tr>
                <tr>
                    <td className={tab.textoLinhas}>De 18,5 até 24,9</td>
                    <td className={tab.textoLinhas}>Peso ideal</td>
                </tr>
                <tr>
                    <td className={tab.textoLinhas}>Acima de 24,9 até 29,9</td>
                    <td className={tab.textoLinhas}>Sobrepeso</td>
                </tr>
                <tr>
                    <td className={tab.textoLinhas}>Acima de 29,9 até 34,9</td>
                    <td className={tab.textoLinhas}>Obesidade</td>
                </tr>
                <tr>
                    <td className={tab.textoLinhas}>Acima de 34,9 até 39,9</td>
                    <td className={tab.textoLinhas}>Obesidade Severa</td>
                </tr>
                <tr>
                    <td className={tab.textoLinhas}>Acima de 39,9</td>
                    <td className={tab.textoLinhas}>Obesidade Mórbida</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela