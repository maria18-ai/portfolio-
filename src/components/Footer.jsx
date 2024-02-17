import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer className='container'>
                <span className='blur'></span>
                <span className='blur'></span>
                <p>
                    Obrigado pela atenção! Fico muito feliz pelo seu interesse nos meus serviços.
                </p>

                <div className="socials">
                    <a 
                    href="https://github.com/maria18-ai" target='_blank'
                    ><i class="ri-github-fill"></i>
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/maria-teodoro-b2250426a/" target='_blank'
                    ><i class="ri-linkedin-box-fill"></i>
                    </a>
                </div>
            </footer>

            <div className="copyright">
                2024 &copy; Maria Teodoro
            </div>
        </div>
    )
}
