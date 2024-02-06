

export default function CardsProjetos({isOpen, children}) {

    const redirecionarParaUrlExterna = (url) => {
        window.location.href = url;
        };
        if(isOpen) {

    return (
        <div>
            <div className='button_close'>{children}</div>

            <section className='container'>
                <div className="projects">
                    <div className="card">
                        <h4>iPhone 13 Pro</h4>
                        <h5>HTML5 CSS3</h5>
                        <p>
                        Um clone da página oficial de venda do iPhone 13 Pro construido para estudos.
                        </p>
                        <button onClick={() => redirecionarParaUrlExterna('https://github.com/maria18-ai/clone-page-iphone13')}>Ver Mais</button>
                    </div>

                    <div className="card">
                        <h4>Gerador QRCode</h4>
                        <h5>JavaScript(ES6) HTML5  CSS3</h5>
                        <p>
                        Uma página que transforma textos e links em QrCodes funcionais.
                        </p>
                        <button onClick={() => redirecionarParaUrlExterna('https://github.com/maria18-ai/gerador_QRCode')}>Ver Mais</button>
                    </div>

                    <div className="card">
                        <h4>hDC Host - Proz</h4>
                        <h5>JavaScript(ES6) HTML5 CSS3</h5>
                        <p>
                        Um layout de site que oferece serviços de hospedagens, feito para o curso técnico de ADS da Proz Educação. 
                        </p>
                        <button onClick={() => redirecionarParaUrlExterna('https://github.com/maria18-ai/hDC_proz')}>Ver Mais</button>
                    </div>

                    <div className="card">
                        <h4>Clone Instagram</h4>
                        <h5>HTML5 CSS3</h5>
                        <p>
                        Um layout clone da página de login do Instagram feito como desafio técnico.
                        </p>
                        <button onClick={() => redirecionarParaUrlExterna('https://github.com/maria18-ai/insta_clone')}>Ver Mais</button>
                    </div>

                    <div className="card">
                        <h4>Mario Jump</h4>
                        <h5>HTML5 CSS3 JavaScript(ES6)</h5>
                        <p>
                        Um jogo de Jump com o personagem Mario, contruido como desafio técnico para aprimorar minhas habilidades.
                        </p>
                        <button onClick={() => redirecionarParaUrlExterna('https://github.com/maria18-ai/mariogame')}>Ver Mais</button>
                    </div>

                    <div className="card">
                        <h4>Cardapio Online</h4>
                        <h5>TypeScript ReactTS CSS3</h5>
                        <p>
                        Um cardápio feito com um banco de dados projetado especialmente para o projeto. Todos os pratos registrados no projeto são salvos, deixando o projeto dinâmico.
                        </p>
                        <button onClick={() => redirecionarParaUrlExterna('https://github.com/maria18-ai/cardapio-online')}>Ver Mais</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
}
