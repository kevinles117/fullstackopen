import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total'

const Course = ({courses}) => 
  <div>
    {courses.map(course => 
    <div key={course.id}>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )}
  </div>

export default Course