import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import pixaliveImg from './images/pixalive.png'


function pixalive () {

  return (
    <Card fluid color='red' header='Pixalive' href='https://pixalive.herokuapp.com/' target='_blank'>
      <Image src={pixaliveImg} wrapped size='small' ui={true} centered />
      <Card.Content>
        <Card.Header>Pixalive</Card.Header>
        <Card.Meta>
          <span className='date'>
            Two-week Capstone Group Project
              </span>
        </Card.Meta>
        <Card.Description >
          <span className='blurb'>
            A multi-user, real-time pixel art editor utilizing React Hooks, Canvas and Socket.Io allowing game designers and artists to produce high quality and complex animations, or your colleagues and friends at the office can unleash their emoji-creating potential, making and exporting animated gifs for your slack channel.
          </span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='left'>
        <span className='list' >
          <Divider />
          Technical success: Using React hooks instead of Redux to learn a new technology.
              <Divider hidden />
          Biggest challenge: Using Canvas for the draw and render elements meant we had to learn the ins and outs of how Canvas and React interact. Using refs and diffing allowed us to render and re-render for multiple users as needed.
              <Divider hidden />
          Personal success: We decided to create our own color picker so the theme would match our other themed elements. Figuring out click location vs hue selected was a fun challenge I tackled solo for this project.
              <Divider hidden />
          Key takeways: The most important takeaway from this project was the importance of choosing the right technology for your work. We choose React hooks to learn it, but using Redux would have been more straightforward in many cases. In addition, initially we considered using Firestore as our database but quickly realized our high number of writes to the database would not allow use of that technology.
              <Divider hidden />
        </span>
          <Button circular size='tiny' color='github' href='https://github.com/pixalive' target='_blank' >
          <Icon name='github' />
          GitHub
        </Button>
          <Button circular size='tiny'  color='github' href='https://www.youtube.com/watch?v=PVSvkN2WdAw&    list=PLx0iOsdUOUmk9wbCJIHGsqBWYV29-3c0I&index=23&t=0s' target='_blank' textAlign='center'>
          <Icon name='youtube' />
          Video Walk-Through
              </Button>
          <Button circular size='tiny' color='github' href='https://github.com/pixalive' target='_blank' textAlign='center'>
          <Icon name='world' />
          Deployed Site
        </Button>
      </Card.Content>
    </Card>
  )
}

export default pixalive
