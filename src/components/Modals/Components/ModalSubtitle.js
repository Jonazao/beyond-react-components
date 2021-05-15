import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    color: (props) => props.color || '#437BBE',
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginTop: '10px',
  },
}));

function ModalSubtitle({ color, subtitle }) {
  const classes = useStyles({ color });
  return (
    <Typography className={classes.main} component="h2" gutterBottom>
      {subtitle}
    </Typography>
  );
}

ModalSubtitle.propTypes = {
  color: PropTypes.string,
  subtitle: PropTypes.string,
};

ModalSubtitle.defaultProps = {
  color: '#437BBE',
  subtitle: '',
};

export default ModalSubtitle;
