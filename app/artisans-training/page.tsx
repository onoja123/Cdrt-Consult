import React from 'react'
import Community from '@/components/ArtisansTraining/Community'
import Hero from '@/components/ArtisansTraining/Hero'
import LearnSkill from '@/components/ArtisansTraining/LearnSkill'
import SkillSet from '@/components/ArtisansTraining/SkillSet'
import SkillUp from '@/components/ArtisansTraining/SkillUp'
import Testimony from '@/components/ArtisansTraining/Testimony'
import Courses from '@/components/ArtisansTraining/Courses'
import Partners from '@/components/Partners'

const page = () => {
  return (
    <div>
    <Hero/>
    <LearnSkill/>
    <SkillUp/>
    <Courses/>
    <SkillSet/>
    <Partners/>
    <Community/>
    <Testimony/>
  </div>
  )
}

export default page
