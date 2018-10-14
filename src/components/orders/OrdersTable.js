import React from 'react';
import { Table, Button } from 'reactstrap';
import translate from 'redux-polyglot/translate';
import { compose } from 'recompose';

const OrdersTable = ({ p: { t } }) => {
    return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>{ t('orders.customer') }</th>
                <th>{ t('orders.number') }</th>
                <th>{ t('common.actions') }</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <Button color="danger" className="margin-right-10">{ t('common.delete') }</Button>
                        <Button color="success">{ t('common.edit') }</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default compose(
    translate,
)(OrdersTable);