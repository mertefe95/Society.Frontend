import React, {useState} from "react";
import useGetCitizens from "./hooks/useGetCitizens";
import {Grid, Typography} from "@material-ui/core";
import {DataGrid} from '@material-ui/data-grid';
import {useHistory} from "react-router-dom";

const Citizens = () => {
    const [loading, citizens] = useGetCitizens();
    const [pageSize, setPageSize] = useState(10);
    const history = useHistory();

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "name", headerName: "Name", flex: 1},
        {field: "age", headerName: "Age", flex: 1},
    ];

    function navigateToDetail(citizen) {
        // TODO: Create detail page for citizen
        history.push(`/citizens/${citizen.id}`);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant={"h3"}>Citizens</Typography>
            </Grid>
            <Grid item xs={12}>
                <DataGrid
                    autoHeight
                    rows={citizens}
                    columns={columns}
                    pagination
                    rowsPerPageOptions={[5, 10, 20]}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    onRowClick={(params) => navigateToDetail(params.row)}
                    loading={loading}
                />
            </Grid>
        </Grid>
    );
}

export default Citizens;
