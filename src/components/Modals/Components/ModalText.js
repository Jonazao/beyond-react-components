import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    color: (props) => props.color || '#252733',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
}));

function ModalText({ color, text }) {
  const classes = useStyles({ color });
  return (
    <Typography className={classes.main} variant="body1" gutterBottom>
      {text}
    </Typography>
  );
}

ModalText.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

ModalText.defaultProps = {
  color: '#252733',
  text: '',
};

export default ModalText;
