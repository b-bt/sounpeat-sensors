import React  from 'react';
import { Card, CardHeader, CardFooter, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import StatusLight from './StatusLight';

const btnImg = require('../images/button.svg');

const SensorBox = () => {
  return (
    <div className="col-4 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Green Button</CardTitle>
        </CardHeader>
        <CardBody>
          <CardImg top width="100%" src={btnImg} alt="Card image cap" className='onImg'/>
          <StatusLight isEnabled={true} />
        </CardBody>
      </Card>
    </div>
  );
}

export default SensorBox;
