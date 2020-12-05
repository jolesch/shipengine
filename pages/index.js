import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 50
    },
    inputField: {
        margin: 20
    },
    button: {
        marginLeft: 20
    },
    header: {
        marginLeft: 90,
        marginTop: 20
    }
}));

export const Index = () => {
    const classes = useStyles();
    const [shipFromValues, setShipFromValues] = useState({
        firstName: '',
        lastName: '',
        address_line1: '',
        city_locality: '',
        state_province: '',
        postal_code: '',
        country_code: 'US',
        address_residential_indicator: 'yes'
    });

    const [shipToValues, setShipToValues] = useState({
        firstName: '',
        lastName: '',
        address_line1: '',
        city_locality: '',
        state_province: '',
        postal_code: '',
        country_code: 'US',
        address_residential_indicator: 'yes'
    });

    const handleChange = (firstName) => (event) => {
        setShipFromValues({...shipFromValues, [firstName]: event.target.value });
    }

    const shipFromFields = [
        {label: 'First name', placeholder: 'First name', autocomplete: 'given-name', name: 'firstName'},
        {label: 'Last name', placeholder: 'Last name', autocomplete: 'family-name', name: 'lastName'},
        {label: 'Street address', placeholder: 'Street address', autocomplete: 'street-address', name: 'address_line1'},
        {label: 'City', placeholder: 'City', autocomplete: 'city', name: 'city_locality'},
        {label: 'State', placeholder: 'State', autocomplete: 'state', name: 'state_province'},
        {label: 'Postal code', placeholder: 'Postal code', autocomplete: 'postal-code', name: 'postal_code'}
];
    const shipToFields = [...shipFromFields];

    const packageFields = [];

    return (
        <form noValidate autoComplete="off">
            <Typography variant='h5' className={classes.header}>Ship from address</Typography>
            <Grid container spacing={3} className={classes.container}>
                {shipFromFields.map((field, index) => (
                    <Grid item xs={4} key={index}>
                    <TextField id="outlined-basic" label={field.label} type='text' variant="outlined" value={shipFromValues.name} className={classes.inputField} onChange={handleChange(field.name)} />
                    </Grid>
                ))}
            </Grid>
            <Typography variant='h5' className={classes.header}>Ship to address</Typography>
            <Grid container spacing={3} className={classes.container}>
                {shipToFields.map((field, index) => (
                    <Grid item xs={4} key={index}>
                    <TextField id="outlined-basic" label={field.label} variant="outlined" type='text' value={shipToValues.name} onChange={handleChange(field.name)} className={classes.inputField} />
                    </Grid>
                ))}
            </Grid>
            <Button variant='contained' color='primary' submit='submit' className={classes.button}>Create shipment</Button>
        </form>
    )
}

export default Index;
