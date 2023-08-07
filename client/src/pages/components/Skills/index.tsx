

export default function Skills(props: any) {
    const skills = props.skills || []
  return (
    <section className="skill" id="skills">
       
        <h1 className="skill-title">Minhas Skills</h1>
        <div className="skill-all">
            <img src="./skills.png" alt="Skills Image" width="500" height="400" id="skills-image" />
            <div className="skill-first">
                

                {skills.length > 0 && skills.map((e: any, index: any) => {

                    return(
                        <div className="skill-first_block" key={index}>
                            <h2 className="skill-first_block--title">{e.name}</h2>
                            <span className="skill-first_block--level">Nível: {e.level}</span>
                            <p className="skill-first_block--description">{e.description}</p>
                        </div>
                    )
                })}



            </div>
        </div>
    </section>

  )
}