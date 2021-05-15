import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    color: (props) => props.color || '#437BBE',
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
}));

function ModalTitle({ color, title }) {
  const classes = useStyles({ color });
  return (
    <Typography className={classes.main} component="h1" gutterBottom>
      {title}
    </Typography>
  );
}

ModalTitle.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
};

ModalTitle.defaultProps = {
  color: '#437BBE',
  title: '',
};

export default ModalTitle;
