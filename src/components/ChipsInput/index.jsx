import React from "react";
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputLabel: {
        textAlign: 'initial'
    }
}));


const chipRenderer = ({chip, className, handleClick, handleDelete}, key) => (
    <Chip
        className={className}
        key={key}
        label={chip}
        onClick={handleClick}
        onDelete={handleDelete}
        size="small"
    />
);


const ChipInputWrapper = ({name, inputLabel, defaultValue, onChange}) => {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.inputLabel}>
                {inputLabel}
            </Typography>
            <ChipInput
                label='Enter'
                chipRenderer={chipRenderer}
                defaultValue={defaultValue}
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={(data) => {
                    onChange(name, data);
                }}
            />
        </>
    );
}

export default ChipInputWrapper;