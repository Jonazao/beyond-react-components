import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    color: (props) => props.color || '#252733',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
}));

function ModalHeader({ color, header }) {
  const classes = useStyles({ color });
  return (
    <Typography className={classes.main} component="h3" gutterBottom>
      {header}
    </Typography>
  );
}

ModalHeader.propTypes = {
  color: PropTypes.string,
  header: PropTypes.string,
};

ModalHeader.defaultProps = {
  color: '#252733',
  header: '',
};

export default ModalHeader;
