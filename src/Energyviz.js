import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import energyvizImg from './images/energyviz.png'


function energyviz() {

  return (
    <Card fluid color='green' header='EnergyViz' href='https://github.com/BabbleBiz/EnergyViz' target='_blank'>
      <Image src={energyvizImg} wrapped size='small' ui={true} centered />
      <Card.Content>
        <Card.Header>EnergyViz</Card.Header>
        <Card.Meta>
          <span className='date'>
            Four-day Personal Hack-a-thon Project
              </span>
        </Card.Meta>
        <Card.Description>
          <span className='blurb'>
          An energy visualizer using D3 and React to show city of Chicago energy data.
          </span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='left'>
        <span className='list' >
          Technical success: Creating a pointer that re-rendered and was able to display current data point from the dataset. Can be seen on the line graph.
              <Divider hidden />
          Biggest challenge: The biggest challenge I faced in this project was getting React and D3 to play well together. I spent quite a while researching re-rendering with D3.
              <Divider hidden />
          Personal success: Doing a deep dive into a new technology. I was thrilled to get D3 rendering data I pulled from the city of Chicago.
              <Divider hidden />
          Key takeaways: When I started this project I was warned that D3 and React did not interact in ways that were easy to predict. The biggest takeway from this project is that it is important to find the right tool for your job before you commit to a specific technology.
              <Divider hidden />
        </span>
        <Button circular color='github' href='https://github.com/BabbleBiz/EnergyViz' target='_blank'>
          <Icon name='github' />
          GitHub
        </Button>
      </Card.Content>
    </Card>
  )
}

export default energyviz
