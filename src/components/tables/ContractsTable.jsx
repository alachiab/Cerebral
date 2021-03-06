'use strict';

import React from 'react';

import Character from '../../models/Character';

import ReactTable from "react-table";

export default class ContractsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contracts = Character.getAllContracts();

        return (
            <ReactTable
                style={{color: '#fff'}}
                data={contracts}
                columns={[
                    {
                        Header: "Type",
                        accessor: "type"
                    },
                    {
                        Header: "Status",
                        accessor: "status"
                    },
                    {
                        Header: "Issuer",
                        id: "issuer_id",
                        accessor: c => c.issuer !== undefined ? c.issuer.name : c.issuer_id
                    },
                    {
                        Header: "Assignee",
                        id: "assignee_id",
                        accessor: c => c.assignee !== undefined ? c.assignee.name : c.assignee_id
                    },
                    {
                        Header: "Date Issued",
                        accessor: "date_issued"
                    },
                ]}
                showPagination={false}
                defaultPageSize={contracts.length}
                filterable={true}
            />
        );
    }
}
