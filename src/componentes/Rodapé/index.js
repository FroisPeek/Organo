import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt="" />
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com/otaldofrois?s=11' target='_blank'>
                            <img src='/imagens/tw.png' alt="" />
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com/du.fd_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'>
                            <img src='/imagens/ig.png' alt="" />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png' alt="" />
            </section>

            <section>
                <p>
                    Desenvolvido por Eduardo Frois, aluno Alura
                </p>
            </section>
        </footer>
    )
}

export default Rodape
