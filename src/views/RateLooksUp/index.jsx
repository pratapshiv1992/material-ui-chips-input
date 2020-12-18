import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import ChipsInput from "../../components/ChipsInput";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DataTable from "../../components/DataTable";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 30
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridItem: {
        padding: theme.spacing(2),
    },
    searchBtn: {
        padding: '30px'
    },
    selectInput:{
      textAlign:"initial"
    },
    cardTitle: {
        textAlign: 'initial'
    }
}));

const defaultValue = [];

const RatesLooksUp = (props) => {
    const classes = useStyles();
    const [chipValues, setChipValues] = useState({});

    const onChange = (name, data) => {
        const newChipValues = {...chipValues};
        newChipValues[name] = data;
        setChipValues(newChipValues);
    }

    const onSearch = ()=>{
        console.log('------onSearch clicked------------',chipValues);
    }
    console.log('------chipValues------------',chipValues);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container className={classes.root} maxWidth='md'>
                <Card>
                    <CardContent>
                        <Typography className={classes.cardTitle} variant="h6" gutterBottom>
                            Rates Looksup
                        </Typography>
                        <Divider />
                        <Grid container>
                            <Grid className={classes.selectInput} item xs={12}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Service Lvl</InputLabel>
                                    <Select
                                        labelId="serviceLvlId"
                                        labelId="serviceLvlId2"
                                        name='serviceLvl'
                                        onChange={(e)=>{
                                            const name = e.target.name;
                                            const value = e.target.value;
                                            onChange(name, value);
                                        }}
                                        //value={age}
                                        label="Service Lvl"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid className={classes.gridItem} item xs={6}>
                                <ChipsInput
                                    id='sourcing-node-id'
                                    inputLabel='Sourcing Node(s)'
                                    name='sourceNodes'
                                    placeholder="Type and press enter to search sourcing nodes"
                                    defaultValue={defaultValue}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid className={classes.gridItem} item xs={6}>
                                <ChipsInput
                                    inputLabel='Sourcing Zip code(s)'
                                    id='sourcing-zipcode-id'
                                    name='sourceZipcodes'
                                    placeholder="Type and press enter to search sourcing zipcode"
                                    defaultValue={defaultValue}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid className={classes.gridItem} item xs={6}>
                                <ChipsInput
                                    inputLabel='Destination Zip code(s)'
                                    id='sourcing-node-id'
                                    name='destinationZipcodes'
                                    placeholder="Type and press enter to search sourcing nodes"
                                    defaultValue={defaultValue}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid className={classes.gridItem} item xs={6}>
                                <Grid container>
                                    <Grid className={classes.gridItem} item xs={6}>
                                        <TextField
                                            id='weigth-id'
                                            label='Weight'
                                            name='weight'
                                            placeholder='Enter the weight'
                                            //className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(e)=>{
                                                const name = e.target.name;
                                                const value = e.target.value;
                                                onChange(name, value);
                                            }}
                                        />
                                    </Grid>
                                    <Grid className={classes.searchBtn} item xs={6}>
                                        <Button variant="contained" color="primary" onClick={onSearch}>
                                            Search
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <DataTable/>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default RatesLooksUp;