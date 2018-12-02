import React  from 'react';
import { Card, CardHeader, CardImg, CardBody, CardTitle } from 'reactstrap';

const rulerImg = require('../images/ruler.svg');

const ValueSensorBox = ({ sensor }) => {
  const { name, value } = sensor;
  const { labelStyle, valueLblStyle } = styles;

  return (
    <div className="col-4 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardImg top width="100%" src={rulerImg} alt="Card image cap" className='onImg'/>
          <div>
            <p style={labelStyle}>Value: </p>
            <p style={{ ...labelStyle, ...valueLblStyle }}>{value}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

const styles = {
  labelStyle: {
    display: 'inline-block'
  },
  valueLblStyle: {
    fontSize: '1.2rem',
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'green'
  }
}

export default ValueSensorBox;
