import { Container, TH, TR, TD, } from "./styles";

const Table = (props) => {
    const { data, columns, lastItemRef } = props;
    return (
        <Container>
            <table>
                <thead>
                    <TR>
                        {columns.map(column => (<TH hideInMobile={column.hideInMobile} key={column.title}>{column.title}</TH>))}
                    </TR>
                </thead>
                <tbody>
                    {data.map((row, index) => {

                        if (data.length == index + 1) {
                            return (
                                <TR ref={lastItemRef} key={String(index)}>
                                    {columns.map((column, index) => {
                                        return <TD hideInMobile={column.hideInMobile} key={row[column.key] || String(index)}>{column.render ? column.render(row) : row[column.key]}</TD>
                                    })}
                                </TR>
                            )
                        } else {
                            return (
                                <TR key={String(index)}>
                                    {columns.map((column, index) => {
                                        return (<TD hideInMobile={column.hideInMobile} key={row[column.key] || String(index)}>{column.render ? column.render(row) : row[column.key]}</TD>)
                                    })}
                                </TR>
                            )

                        }
                    })}
                </tbody>
            </table>
        </Container>
    )


}


export default Table