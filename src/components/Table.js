import "./Table.css"
import { useEffect, useState } from "react";

function Table(props) {
    const [datas, setDatas] = useState(props.datas);
    const [sortMethod, setSortMethod] = useState({
        column: "Nome",
        ascending: false,
    });

    useEffect(() => {
        ToggleSortOrder("Nome");
    }, [])

    useEffect(() => {
        setDatas([...datas].sort((a, b) => {
            if (sortMethod.column === "Nome") {
                return sortMethod.ascending ?
                    a.nome.localeCompare(b.nome) :
                    b.nome.localeCompare(a.nome);
            } else {
                return sortMethod.ascending ?
                    a.nota - b.nota :
                    b.nota - a.nota;
            }
        }))
    }, [sortMethod])

    function ToggleSortOrder(column) {
        const ascending = sortMethod.column === column ? !sortMethod.ascending : true;
        setSortMethod({ column, ascending });
    }

    const HeaderText = (column) => column + (sortMethod.column === column ? (sortMethod.ascending ? "↑" : "↓") : "");

    return (
        <table className="Table ">
            <thead>
                <tr>
                    <th onClick={() => ToggleSortOrder("Nome")}>{HeaderText("Nome")}</th>
                    {props.original ? <th onClick={() => ToggleSortOrder("Nota")}>{HeaderText("Nota")}</th> : <></>}
                </tr>
            </thead>
            <tbody>
                {datas.map((data, index) => (
                    <tr key={index}>
                        <td className={data.nota >= 50 ? "Table-name__green" : "Table-name__red"}>{data.nome}</td>
                        {props.original ? <td>{data.nota}</td> : <></>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;