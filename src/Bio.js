import React from 'react';
import { Card, Icon, Image, Divider, List } from 'semantic-ui-react'
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
            <span className='blurb'>
            I'm a coder who loves seeing people use my apps to make their lives better. Talk to me about how you use data to make your users' lives better.
            </span>


      </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='left'>
          <span className='list'>
            Growing up outside Chicago, I knew I wanted to dedicate my life to helping people. After graduating with a Masters in Public Affairs, I took on roles in the non-profit and private-sector consulting worlds to find where my technical skills fit with my drive to help people. Early in my career, I realized we live in a world where data is all around us and I am passionate about helping people use data to live better lives.

            After completing my training at Fullstack Academy of Code, I look forward to writing beautiful code to unlock the potential of the data all around us. When I'm not coding, you can find me at one of the many rock climbing gyms in Chicago. I am also known to patrol the dog beach with my lovable mutt Tails (yes, he is named after the Sonic character).
          </span>
          <Divider hidden />
          <List textAlign='center'>
            Skills:
            <List.Item>Proficient: Javascript · Express · React/Redux · Express · Sequelize ORM · PostgreSQL· Jasmin · SQL · Asana · CRM Dynamics</List.Item>
            <List.Item>Familiar: React Native · Webpack · Travis CI · Heroku · STATA·Mocha · Chai · OAuth · Passport · Git · Flexbox · CSS · HTML5 · Semantic UI React · Expo · D3 · FS(File System) · Socket.io · React Hooks · Firestore</List.Item>
          </List>

          <Divider hidden />

            <List>
              Education:
              <List.Item>Grace Hopper Track - Fullstack Academy of Code</List.Item>
              <List.Item>University of Wisconsin-Madison, La Follette School of Public Affairs (MPAff)</List.Item>
              <List.Item>Carleton College (BA)</List.Item>
            </List>

        </Card.Content>
      </Card>

    </div>
  )
}

export default Bio
