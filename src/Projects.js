import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import Pixalive from './Pixalive'
import GraceHOPper from './Gracehopper'

function Projects () {
  return (
    <div id='projectcontainer'>
      <Card.Group>
        <Pixalive />
        <GraceHOPper />
        <Card fluid color='orange' header='Option 2' />
        <Card fluid color='yellow' header='Option 3' />
      </Card.Group>
    </div>
  )
}

export default Projects
