import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import gracehopperImg from './images/gracehopper.png'


function gracehopper() {

  return (
    <Card fluid color='blue' header='GraceHOPper' href='https://gracehopper-abmt.herokuapp.com/' target='_blank'>
      <Image src={gracehopperImg} wrapped size='small' ui={true} centered />
      <Card.Content>
        <Card.Header>Grace HOPper</Card.Header>
        <Card.Meta>
          <span className='date'>
            One Week and a Half Group Project 
              </span>
        </Card.Meta>
        <Card.Description>
          <span className='blurb'>
          An e-commerce website selling beer built using React, Redux and Postgres. Styled with Semantic UI React.
          </span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='left'>
        <span className='list' >
          Technical success: This project used Semantic UI React to keep styling consistent across coders.
              <Divider hidden />
          Biggest challenge: The biggest challenge we faced in this project was creating a cart. We mob programmed the framework for the cart, allowing items to be added, removed and updated for a specific user.
              <Divider hidden />
          Personal success: I took charge of the admin functionality for this project. We used both select rendering and admin route middleware to secure admin-only actions.
              <Divider hidden />
          Key takeaways: We started the project with a robust project board which we kept updated. We were able to make as much progress as we did because we all knew what tasks remained and who was working on what task.
              <Divider hidden />
        </span>
        <span float='center'>
          <Button circular color='github' href='https://github.com/toddivey/Grace_Shopper_ABMT' target='_blank'>
            <Icon name='github' />
            GitHub
        </Button>
          <Button circular color='github' href='https://gracehopper-abmt.herokuapp.com/' target='_blank'>
            <Icon name='world' />
            Deployed Site
        </Button>
        </span>

      </Card.Content>
    </Card>
  )
}

export default gracehopper
