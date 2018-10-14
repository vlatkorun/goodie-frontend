import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import translate from 'redux-polyglot/translate';
import { compose } from 'recompose';

const Home = ({ p: { t } }) => (
    <Container className="margin-top-30">
        <Row>
          <Col>
            <Jumbotron>
                <h1 className="display-3">
                    { t('home.welcome') }
                </h1>
                <p className="lead">
                    { t('home.intro') }
                </p>
            </Jumbotron>
          </Col>
        </Row>
    </Container>
);

export default compose(
    translate,
)(Home);