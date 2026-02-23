import React from 'react'

const SkillCard = ({title,skills}) => {
  return (
    <div className='card'>
       
          <h2>{title}</h2>
        <ul>
          {skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
          ))}
        </ul>

    
    </div>
  )
}

export default SkillCard