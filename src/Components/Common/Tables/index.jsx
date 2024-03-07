import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CommonTable = ({ data, columns, height, width, maxWidth, className }) => {
  if (!data || !Array.isArray(data)) {
    // Handle the case where data is not defined or not an array
    return null;
  }

  return (
    <TableContainer
      component={Paper}
      style={{ msOverflowY: "auto", height: height, width: width }}
    >
      <Table
        style={{ padding: "1%", justifyContent: "space-between" }}
        stickyHeader
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{
                  padding: "1%",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  color: "#004f83",
                  textAlign: "center",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    padding: "1%",
                    fontWeight: "bold",
                    fontSize: "15px",
                    textAlign: "center",
                    maxWidth: maxWidth,
                  }}
                >
                  {column.id === "profiles" &&
                  typeof row[column.id] === "string" ? (
                    <img
                      src={row[column.id]}
                      alt=""
                      height={25}
                      width={25}
                      style={{ borderRadius: "50%" }}
                      referrerPolicy="no-referrer"
                      className={className}
                    />
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
