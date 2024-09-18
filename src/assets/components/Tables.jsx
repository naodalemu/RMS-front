import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Tables.module.css";

function Tables({ onCloseBackdrop }) {
    const [tables, setTables] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTables = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/tables"); // API URL to fetch tables
                setTables(response.data); // Update state with fetched data
            } catch (error) {
                setError("Failed to load table data");
            }
        };

        fetchTables(); // Fetch tables on component mount
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    const occupiedTables = tables.filter(table => table.table_status === "occupied").length;
    const freeTables = tables.filter(table => table.table_status === "free").length;

    return (
        <div className={classes.backdrop} onClick={onCloseBackdrop}>
            <div className={classes.tableDisplayContainer} onClick={(e) => e.stopPropagation()}>
                <h3 className={classes.tableHeader}>Check for Available Tables</h3>
                <div className={classes.legend}>
                    <div>
                        <div className={classes.tableItem} style={{ background: "#fff", color: "#333" }}>{freeTables}</div>
                        <p>{freeTables > 1 ? "Free Tables" : "Free Table"}</p>
                    </div>
                    <div>
                        <div className={classes.tableItem} style={{ background: "#333", color: "#fff" }}>{occupiedTables}</div>
                        <p>{occupiedTables > 1 ? "Occupied Tables" : "Occupied Table"}</p>
                    </div>
                </div>
                <div className={classes.tablesContainer}>
                    {tables.map((table) => (
                        <div 
                            key={table.id} 
                            className={classes.tableItem} 
                            style={{ 
                                background: table.table_status === "occupied" ? "#333" : "#fff", 
                                color: table.table_status === "occupied" ? "#fff" : "#333" 
                            }}
                        >
                            { table.table_number }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tables;
