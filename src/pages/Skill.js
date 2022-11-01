import axios from 'axios'
import React from 'react'
import Experience from '../components/Experience'
import ProgrammingLanguage from '../components/ProgrammingLanguage'
import { GithubContributions } from "react-github-graph"

const Skill = () => {
  // fetch("/")
  // .then(res => res.json())
  // .then(data => console.log(data))
  // 
  // const github = axios.get("/")
  // console.log(github)


  const contributions = fetch("/",{
    mode : "cors"
  }).then(res => res.text())
  .then(data => console.log(data))
  return (
    <div className='container container-skill'>
      <h1 className='skills-heading'>Skills</h1>

      <h3>Experience :</h3>
      <Experience />

      <h3>Technology : </h3>
      <ProgrammingLanguage />

      <h3>Github :</h3>
      <div className='github-container'>
        <GithubContributions username='isamitprajapati' />
      </div>

    </div>
  )
}

export default Skill