import React from 'react';
import { Card, Icon, Image, Divider } from 'semantic-ui-react'
import headshot from './images/Headshot.jpeg'

function Bio() {
  return (
    <div>
  <Card>
        <Image src={headshot} wrapped size='small' ui={true} centered />
        <Card.Content>
          <Card.Header>Teaching Fellow, Fullstack Academy of Code</Card.Header>
          <Card.Meta>
            <span className='date'>
            City: Chicago, IL
            </span>
          </Card.Meta>
          <Card.Description>
            I'm a coder who loves seeing people use my apps to make their lives better. Talk to me about how you use data to make your users' lives better.

      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            Growing up outside Chicago I knew I wanted to dedicate my life to helping people. After graduating with a Masters in Public Affairs, I took on a roles in the non-profit and private consulting world to try and find where my technical skills fit with my drive to help people. We live in a world where data is all around us and I am passionate about helping people use this data to live better lives. After completing my training at Fullstack Academy of code, I look forward to writing beautiful code to unlock the potential of the data all around us.

            When I'm not coding you can find me at one of the many beautiful climbing gyms in Chicago. I am also known to patrol the dog beach with my lovable mutt Tails (yes, he is named after the Sonic character).
            <Divider hidden />
            Skills:
            Proficient: Javascript · Express · React/Redux · Express · Sequelize ORM · PostgreSQL· Jasmin · SQL · Asana · CRM Dynamics

            Familiar: React Native · Webpack · Travis CI · Heroku · STATA·Mocha · Chai · OAuth · Passport · Git · Flexbox · CSS · HTML5 · Semantic UI React · Expo · D3 · FS(File System) · Socket.io · React Hooks · Firestore

        </Card.Content>
      </Card>

    </div>
  )
}

export default Bio
