import React from 'react';

// Define the props and types
export interface ColumnType<T> {
    title: string;
    key: string;
    dataIndex: keyof T;
    width?: string;
    // @ts-ignore
    render?: (text: string | undefined, _: T) => React.ReactNode | string;
}

interface Props<T> {
    columns: ColumnType<T>[];
    data: T[];
}

export default function Table<T>({ data, columns }: Props<T>): React.ReactNode {
    return (
        <table className="max-w-full border rounded-full">
            <thead className="bg-gray-50 w-full">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className={`px-6 py-2 text-left text-md font-semibold bg-green-700 border-r border-r-green-600 text-white  ${
                                column.width || ''
                            } `}
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white ">
                {data.map((item, index) => (
                    <tr key={index} className={ index % 2 === 0 ? 'bg-green-200 border-r-green-100' : 'bg-white'}>
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className={`px-3  text-sm text-gray-900 ${
                                    column.width || ''
                                }`}
                            >   
                            {/* @ts-ignore */}
                                {column.render ? column.render(String(item[column.dataIndex]), item) : item[column.dataIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    
    );
}
