import React from 'react'
import SkillCard from './SkillCard'
const Skills = () => {

    const skillsData=[
        {
            title:"Soft Skill",
            skills:[
                "Communication",
                "Teamwork",
                "Problem Solving",
                "Leadership",
                "Time Management",
                "Adaptability",
                "Critical Thinking",
                "Conflict Resolution",
                "Emotional Intelligence",
                "Creativity"
            ]

        },
        {
            title: "Technical Skill",
            skills:[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Git",
                "REST API"
            ]
        }
    ]



  return (

    


    <>


<div className='skills-card'>
 {skillsData.map((skill,index)=>(
    <SkillCard
        key={index}
        title={skill.title}
        skills={skill.skills}
    />
    ))}

    
</div>
   
    
    </>
  )
}

export default Skills