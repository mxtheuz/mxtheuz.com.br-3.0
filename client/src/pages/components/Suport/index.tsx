import Link from "next/link";

export default function Suport() {
  return ( 
    <section className="suporte" id="contact">
        <h1 className="suporte-title">
            Gostou do meu trabalho?
        </h1>
        <p className="suporte-subtitle">
            Nossa equipe de atendimento estará disponível para ajudar quem for preciso!
        </p>

        <div className="suporte-social">

            <img src="./suporte.png" alt="Suporte" width="700" height="350" id="image-suport" />

            <div className="suporte-social_infos">

                <div className="suporte-social_infos--div">
                    <Link href="https://wa.me/+5549991256304" className="suporte-social_infos--div__link">
                        <i className="bi bi-whatsapp"></i>
                        <span> Whatsapp</span>
                    </Link>
                </div>

                <div className="suporte-social_infos--div">
                    <Link href="https://discord.com/users/394866819866820610" className="suporte-social_infos--div__link">
                        <i className="bi bi-discord"></i>
                        <span> Discord</span>
                    </Link>
                </div>

                <div className="suporte-social_infos--div">
                    <Link href="https://t.me/ofmxtheuz" className="suporte-social_infos--div__link">
                        <i className="bi bi-telegram"></i>
                        <span> Telegram</span>
                    </Link>
                </div>

                <div className="suporte-social_infos--div">
                    <Link href="mailto:contato@mxtheuz.com.br" className="suporte-social_infos--div__link">
                        <i className="bi bi-envelope"></i>
                        <span> E-mail</span>
                    </Link>
                </div>

                <div className="suporte-social_infos--div">
                    <Link href="https://github.com/ofmxtheuuz" className="suporte-social_infos--div__link">
                        <i className="bi bi-github"></i>
                        <span> Github</span>
                    </Link>
                </div>

            </div>
        </div>

    </section>
  )
}