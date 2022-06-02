import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  Input,
  FormGroup,
  Label,
  Form,
  Row,
  Col,
  Button,
} from "reactstrap";

export default function Contact() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Contact</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Let's Chat!
          </CardSubtitle>
        </CardBody>
      </Card>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input placeholder="Who are you?" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Message</Label>
          <Input placeholder="Tell Me Everything" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
