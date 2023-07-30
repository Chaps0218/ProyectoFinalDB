import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Typography, Button, IconButton, TextField, Grid  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    padding: theme.spacing(10),
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: '#555', // Custom color for the close button
  },

  nonClickableButton: {
    borderRadius: '8px',
    padding: '8px 16px',
    marginRight: theme.spacing(6),
    color: theme.palette.success.main,
    border: `2px solid ${theme.palette.success.main}`,
    fontWeight: 'bold', // Custom font weight for non-clickable buttons
  },

  clickableButton: {
    borderRadius: '8px',
    padding: '12px 24px',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4),
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    // Custom hover effect for clickable buttons
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  
  textFieldHover: {
    '&:hover': {
      transform: 'scale(1.05)', // Make the TextField grow on hover
    },
  },

  dialogPaper: {
    width: '130rem', 
    height: 'auto', // Set the height of the dialog container
  },

  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
  },

}));

const PopUpProfesor = ({ option1, option2, option3, onClose }) => {
  const classes = useStyles();

  // State for dynamic information in the text fields
  const [dynamicValue1, setDynamicValue1] = useState('A');
  const [dynamicValue2, setDynamicValue2] = useState('A');

  // Update functions for dynamic information
  const handleDynamicChange1 = (event) => {
    setDynamicValue1(event.target.value);
  };

  const handleDynamicChange2 = (event) => {
    setDynamicValue2(event.target.value);
  };

  // ... Other logic for the clickable buttons ...

  return (
    <Dialog open={true} maxWidth="md" fullWidth classes={{ paper: classes.dialogPaper }}>
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <DialogContent className={classes.dialogContent}>
      <Typography variant="h5">Detalle informativo</Typography>


      <div className={classes.gridContainer}>
      <TextField label="Vacantes"
        value={dynamicValue2} disabled 
        className={classes.textFieldHover} 
        style={{ fontSize: '2rem' }}
      />

      <TextField label="Vacantes"
              value={dynamicValue2} disabled 
              className={classes.textFieldHover} 
              style={{ fontSize: '2rem' }}
      />

      <TextField label="Vacantes"
                    value={dynamicValue2} disabled 
                    className={classes.textFieldHover} 
                    style={{ fontSize: '2rem' }}
            />

      <TextField label="Vacantes"
                    value={dynamicValue2} disabled 
                    className={classes.textFieldHover} 
                    style={{ fontSize: '2rem' }}
            />

      <TextField label="Vacantes"
                    value={dynamicValue2} disabled 
                    className={classes.textFieldHover} 
                    style={{ fontSize: '2rem' }}
            />

      <TextField label="Vacantes"
                    value={dynamicValue2} disabled 
                    className={classes.textFieldHover} 
                    style={{ fontSize: '2rem' }}
            />

      <TextField label="Vacantes"
                    value={dynamicValue2} disabled 
                    className={classes.textFieldHover} 
                    style={{ fontSize: '2rem' }}
            />
      </div>


        <div>
          <Button className={classes.nonClickableButton}>Non-Clickable 1</Button>
          <Button className={classes.nonClickableButton}>Non-Clickable 2</Button>
          <Button className={classes.nonClickableButton}>Non-Clickable 3</Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button className={classes.clickableButton}>Continue</Button>
        <Button className={classes.clickableButton}>Retry</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpProfesor;
