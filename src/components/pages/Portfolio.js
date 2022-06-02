import React from 'react';
import { Card, CardImgOverlay, CardTitle,Col,Row,CardText,CardImg,Button} from 'reactstrap';
// import ProjectImage from "../images/Screen Shot 2022-06-01 at 9.34.49 PM.jpg";


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Row>
  <Col sm="6">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src= "https://picsum.photos/318/270"
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Adopt-a-Owner
      </CardTitle>
    </CardImgOverlay>
  </Card>
  </Col>
  <Col sm="6">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/270"
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Project 2
      </CardTitle>
    </CardImgOverlay>
  </Card>
  </Col>
</Row>
<Row>
  <Col sm="6">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/270"
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Project 3
      </CardTitle>
    </CardImgOverlay>
  </Card>
  </Col>
  <Col sm="6">
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/270"
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
  </Col>
</Row>

    </div>
    
  );
}
