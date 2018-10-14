import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import translate from 'redux-polyglot/translate';
import { compose } from 'recompose';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

import OrdersSearch from '../../components/orders/OrdersSearch';
import OrdersTable from '../../components/orders/OrdersTable';

const Listing = ({ p: { t } }) => (
    <Container className="margin-top-30">
        <Row>
          <Col>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/">{ t('home.home') }</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    { t('orders.orders') }
                </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className="margin-top-30">
          <Col>
            <OrdersSearch />
          </Col>
        </Row>
        <Row className="margin-top-30">
            <Col>
                <OrdersTable />
            </Col>
        </Row>
    </Container>
);

export default compose(
    translate,
)(Listing);