import React, { Fragment } from 'react';
import { Collapse, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import translate from 'redux-polyglot/translate';
import { compose, withState, withHandlers } from 'recompose';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const OrdersSearch = ({ p: { t }, isOpen, toggle }) => {
    return (
        <Fragment>
            <Button color="primary" onClick={toggle} className={classnames('margin-right-20')}>
                { t('orders.search_orders') }
            </Button>
            <Link to="/orders/create" className={classnames('btn', 'btn-primary')}>
                { t('orders.create_order') }
            </Link>
            <Collapse isOpen={isOpen}>
                <Form className={classnames('margin-top-20')}>
                    <FormGroup>
                        <Label for="q">
                            { t('orders.customer_or_order_number') }
                        </Label>
                        <Input type="text" name="q" id="q" />
                    </FormGroup>
                    <Button>
                        { t('common.submit') }
                    </Button>
                </Form>
            </Collapse>
        </Fragment>
    );
}

export default compose(
    translate,
    withState('isOpen', 'setIsOpen', false),
    withHandlers({
        toggle: ({ setIsOpen, isOpen }) => () => setIsOpen(!isOpen),
    })
)(OrdersSearch);