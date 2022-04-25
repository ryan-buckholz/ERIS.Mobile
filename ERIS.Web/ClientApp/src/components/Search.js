import React, { Component } from 'react';
import { SearchFilters } from './SearchFilters';
import SearchResultsGrid from './SearchResultsGrid';
import { Grid } from '@material-ui/core';
import {  Button, Card, CardActions, CardContent, CardHeader } from '@mui/material/';
import Form from '../layouts/Form';
import 'react-tabs/style/react-tabs.css';


export class Search extends Component {
    static displayName = Search.name;
    

    render () {
        return (
            <div>   
                <div className="alert alert-primary text-center">Hello, Please enter the search criteria below </div>

                <Form /* onSubmit={}*/> 
                    <Grid containerxl>
                        <Grid item>
                            <Card sx={{ minWidth: 275 }} variant='outlined'>
                            <CardHeader title="Search" />
                                <CardContent>
                                    <SearchFilters />
                                </CardContent>

                                <CardActions style={{justifyContent:'center'}}>
                                    <Button variant="contained">Submit</Button>
                                </CardActions>
                            </Card>                            
                        </Grid>
                    </Grid> 
                </Form> 
                
                <SearchResultsGrid />
            </div>
        );
    }
}
