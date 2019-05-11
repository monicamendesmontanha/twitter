import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class TwitterFeed extends Component {

    render() {
        const { author } = this.props
        return (
            <div>
              <Container>
                <Row>
                  <Col md={5}>
                    Left side
                  </Col>
                  <Col md={7}>
                    Right side
                  </Col>
                </Row>
              </Container>
            </div>
        )
    }
}

export default TwitterFeed