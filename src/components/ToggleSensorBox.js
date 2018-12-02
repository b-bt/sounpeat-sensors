import React  from 'react';
import { Card, CardHeader, CardFooter, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import StatusLight from './StatusLight';

const btnImg = require('../images/button.svg');
const capacitiveImg = require('../images/capacitive.svg');

const ToggleSensorBox = ({ sensor, capacitive }) => {
  const { name, isEnabled } = sensor;

  const image = capacitive ? capacitiveImg : btnImg;

  return (
    <div className="col-4 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardImg top width="100%" src={image} alt="Card image cap" className='onImg'/>
          <StatusLight isEnabled={isEnabled} />
        </CardBody>
      </Card>
    </div>
  );
}

export default ToggleSensorBox;
