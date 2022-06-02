import React from 'react';
import { Card,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';

export default function Portfolio() {
  return (
    <div>
  <Card
  >
    <CardBody>
      <CardTitle tag="h5">
        About Me
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Hi! I am Cody Polland
      </CardSubtitle>
      <CardText>
      Hi! My name is Cody Polland and I am a 28 year old
      WebDeveloper currently livingbased in San Diego,
      Califoria. I grew up in Denver, Colorado. I studied at
      Savannah College for art and Design(SCAD) and currently 
      studing web devlopment at UCSD Extension.
      </CardText>
    </CardBody>
  </Card>
</div>
  );
}
