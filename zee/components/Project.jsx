import React from 'react'

const Project = ({index, name, setModal,tag,link }) => {
  return (
    <div onMouseEnter={() => {setModal({active: true, index})}} 
    onMouseLeave={() => {setModal({active: false, index})}} 
    className={"project"}>

    <h2>{name}</h2>

    <p>{tag}</p>

</div>
  )
}

export default Project