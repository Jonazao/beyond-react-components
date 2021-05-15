import React from 'react';
import { Container, Paper, Modal, Fade } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import usewindowDimensions from '../../hooks/useWindowDimensions';
import DialogModal from './DialogModal';

const useStyles = makeStyles(() => ({
  main: {
    position: 'absolute',
    '@global': {
      '*::-webkit-scrollbar': {
        width: '8px',
        borderRadius: '4px',
      },
      '*::-webkit-scrollbar-track': {
        marginTop: '14px',
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',

        borderRadius: '4px',
      },
    },
  },
  papper: {
    maxHeight: (props) => props.height - 60,
    width: '44%',
    margin: '30px auto 30px',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
}));
let open = true;
function AppModal({ title, content }) {
  const handleClose = () => {
    open = false;
  };
  const { height } = usewindowDimensions();
  const classes = useStyles({ height });
  return (
    <Modal className={classes.main} open={open}>
      <Fade in={open}>
        <Container>
          <Paper className={classes.papper}>
            <DialogModal title={title} content={content} onButtonCloseClick={handleClose} />
          </Paper>
        </Container>
      </Fade>
    </Modal>
  );
}

AppModal.propTypes = {
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array,
};

AppModal.defaultProps = {
  title: '',
  content: [],
};

export default AppModal;
