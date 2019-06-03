import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import Pixalive from './Pixalive'
import GraceHOPper from './Gracehopper'
import Energyviz from './Energyviz'

function Projects () {
  return (
    <div id='projectcontainer'>
      <h2>Projects</h2>
      <Card.Group>
        <Pixalive />
        <GraceHOPper />
        <Energyviz />
      </Card.Group>
    </div>
  )
}

export default Projects
