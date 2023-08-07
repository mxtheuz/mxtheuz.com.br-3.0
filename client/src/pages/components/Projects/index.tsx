import Link from "next/link";

export default function Projects() {
  return (
    <section className="projects" id="port">
        <h1 className="project-title">
            Projetos
        </h1>
        <div className="projetos">
            <div className="projetos-project">
                    <span className="projetos-project_title">
                        Henrique Menu
                    </span>
                <img src="./henriquemenu.png" alt="" width="200" height="100"
                     className="projetos-project_image" />
                <span className="projetos-project_type">
                        Webapp com ASP.NET Core MVC
                    </span>
                <Link href="https://henriquemenu.com">
                    <button className="projetos-project_button">
                        henriquemenu.com
                    </button>
                </Link>
                <span className="projetos-project_date">
                        Desenvolvido em 2021
                    </span>
            </div>


            <div className="projetos-project">
                    <span className="projetos-project_title">
                        Henrique Menu Injector
                    </span>
                <img src="./henriquemenuinjector.png" alt="" width="200" height="100"
                     className="projetos-project_image" />
                <span className="projetos-project_type">
                        Desktop com .NET Core
                    </span>
                <Link href="https://henriquemenu.com">
                    <button className="projetos-project_button">
                        henriquemenu.com
                    </button>
                </Link>
                <span className="projetos-project_date">
                        Desenvolvido em 2021
                    </span>
            </div>


            <div className="projetos-project">
                    <span className="projetos-project_title">
                        Portfólio
                    </span>
                <img src="./sitepessoal.png" alt="" width="200" height="100"
                     className="projetos-project_image" />
                <span className="projetos-project_type">
                        Webapp com React
                    </span>
                <Link href="https://mxtheuz.com.br">
                    <button className="projetos-project_button">
                        mxtheuz.com.br
                    </button>
                </Link>
                <span className="projetos-project_date">
                        Atualizado em 2023
                    </span>
            </div>



            <div className="projetos-project">
                    <span className="projetos-project_title">
                        Med Life
                    </span>
                <img src="./medlife.png" alt="" width="200" height="100"
                     className="projetos-project_image" />
                <span className="projetos-project_type">
                        Webapp com Typescript
                    </span>
                <Link href="https://medlife7l.com">
                    <button className="projetos-project_button">
                        medlife7l.com
                    </button>
                </Link>
                <span className="projetos-project_date">
                        Desenvolvido em 2022
                    </span>
            </div>


            <div className="projetos-project">
                    <span className="projetos-project_title">
                        Papoularia
                    </span>
                <img src="./papoularia.png" alt="" width="200" height="100"
                     className="projetos-project_image" />
                <span className="projetos-project_type">
                        Webapp com React
                    </span>
                <Link href="https://papoularia.com">
                    <button className="projetos-project_button">
                        papoularia.com
                    </button>
                </Link>
                <span className="projetos-project_date">
                        Desenvolvido em 2022
                    </span>
            </div>

            <div className="projetos-project">
                    <span className="projetos-project_title">
                        Piccoli Dev
                    </span>
                <img src="./piccolidev.png" alt="" width="200" height="100"
                     className="projetos-project_image" />
                <span className="projetos-project_type">
                        Webapp com PHP
                    </span>
                <Link href="https://piccolidev.com">
                    <button className="projetos-project_button">
                        piccolidev.com
                    </button>
                </Link>
                <span className="projetos-project_date">
                        Desenvolvido em 2022
                    </span>
            </div>
        </div>
    </section>

  )
}