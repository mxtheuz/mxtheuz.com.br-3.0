import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Main() {
  return (
    <div>
        <section className="main-sobremim" id="about">
            <div className="main-sobremim_primary flex">
                <div className="main-sobremim_primary--division animate__animated animate__backInLeft">
                    <h2 className="main-sobremim_primary--title">
                
                    <Typewriter
                    words={['Me chamo Matheus =)']}
                    cursor
                    cursorStyle='_'
                    typeSpeed={120}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                    </h2>
                    <p className="main-sobremim_primary--paragraph">
                        Eai, galera! Como não podemos nos conhecer pessoalmente, aqui vai um pouco sobre mim... Mexo com
                        tecnologia há 2 anos, já desenvolvi muitas coisas entre muitas plataformas, um ambiente mais
                        louco que o outro! Já desenvolvi desbloqueios para consoles, fiz aplicações desktop e webapps,
                        quebrei a cabeça organizando um servidor Linux inteiro! Mas meu foco principal é desenvolvimento
                        Full-Stack com PHP, ASP.NET Core MVC e Banco de Dados, Aplicações no Console e Desktop com .NET
                        Framework/Core, e em muitos casos Aplicações Mobile.
                    </p>
                </div>
                <div className="main-sobremim_secondary">
                    <img src="/miya.jpg" alt="Foto Perfil" width="350" height="350"
                        id="main-sobremim_primary--perfil" />
                </div>
            </div>
            <div id="buttons">
                <div className="main-sobremim_button">
                    <Link href="#contact" className="main-sobremim_button--btn__link animate__animated animate__zoomInDown">
                        Contato
                    </Link>
                </div>
                <div className="main-sobremim_button">
                    <Link href="/C.pdf"
                    className="main-sobremim_button--btn__link-second animate__animated animate__zoomInDown">
                        Curriculo <i className="bi bi-box-arrow-down"></i>
                    </Link>
                </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#4F22F2" fill-opacity="1"
                d="M0,32L34.3,26.7C68.6,21,137,11,206,26.7C274.3,43,343,85,411,101.3C480,117,549,107,617,85.3C685.7,64,754,32,823,53.3C891.4,75,960,149,1029,160C1097.1,171,1166,117,1234,101.3C1302.9,85,1371,107,1406,117.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
            </path>
        </svg>
    </div>
  )
}