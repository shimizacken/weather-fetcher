import React from 'react';
import PropTypes from 'prop-types';
import {RemoveHistoryModalContainer} from '../RemoveHistoryModalContainer';
import {historyTableHeadersBuilder} from '../../bll/historyTableHeadersBuilder';
import {historyTableColumnsBuilder} from '../../bll/historyTableColumnsBuilder';
import {HistoryTableRowRenderer} from './HistoryTableRowRenderer';
import {HistoryTableHeaderRenderer} from './HistoryTableHeaderRenderer';
import {Table} from 'app/components/common';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({items}) => {
    const headers = historyTableHeadersBuilder();
    const rows = historyTableColumnsBuilder(items);

    return (
        <div className={style.historyTableWrapper} data-cy="history-table">
            <RemoveHistoryModalContainer />
            <div>
                <Table
                    headers={headers}
                    items={rows}
                    tableClassName={style.table}
                    headerRenderer={HistoryTableHeaderRenderer}
                    rowRenderer={HistoryTableRowRenderer}
                />
            </div>
        </div>
    );
};

HistoryTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()),
};
