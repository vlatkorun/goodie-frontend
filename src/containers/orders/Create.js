import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import translate from 'redux-polyglot/translate';
import { compose } from 'recompose';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

const Create = ({ p: { t } }) => (
    <Container className="margin-top-30">
        <Row>
          <Col>
          <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/">{ t('home.home') }</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/orders">{ t('orders.orders') }</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    { t('orders.create_order') }
                </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
    </Container>
);

export default compose(
    translate,
)(Create);