import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';
import translate from 'redux-polyglot/translate';
import { compose, withState, withHandlers } from 'recompose';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ isOpen, toggle, p: { t }, home, orders, createOrders }) => (
    <div>
        <Navbar color="light" light expand="md">
            <Container>
                <Link to="/" className="navbar-brand">
                    { t('common.app_name') }
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link">
                                { t('home.home') }
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                { t('orders.orders') }
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag='a' onClick={() => orders()}>
                                    { t('orders.orders') }
                                </DropdownItem>
                                <DropdownItem tag='a' onClick={() => createOrders()}>
                                    { t('orders.create_order') }
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        home: () => push('/'),
        orders: () => push('/orders'),
        createOrders: () => push('/orders/create'),
    }, dispatch)
}

export default compose(
    translate,
    connect(null, mapDispatchToProps),
    withState('isOpen', 'setIsOpen', false),
    withHandlers({
        toggle: ({ setIsOpen, isOpen }) => () => setIsOpen(!isOpen),
    })
)(Navigation);