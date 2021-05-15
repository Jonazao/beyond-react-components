import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Title from './Components/ModalTitle';
import Subtitle from './Components/ModalSubtitle';
import Header from './Components/ModalHeader';
import List from './Components/ModalList';

const useStyles = makeStyles(() => ({
  main: {
    fontFamily: 'Mulish',
    paddingTop: '27px',
    paddingBottom: '20px',
    marginLeft: '36px',
  },
  closeButton: {
    paddingLeft: 0,
    backgroundColor: 'transparent',
    color: '#437BBE',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    fontSize: '12px',
    fontStyle: 'normal',
    lineHeight: '18px',
    fontWeight: 'bold',
  },
}));

const renderContent = (content) =>
  content.map((c) => {
    switch (c.type) {
      case 'subtitle':
        return <Subtitle subtitle={c.header} />;
      case 'header':
        return <Header header={c.header} color={c.color} />;
      case 'list':
        return <List header={c.header} color={c.color} items={c.items} />;
      default:
        return null;
    }
  });

function DialogModal({ title, content, onButtonCloseClick }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Title title={title} />
      {renderContent(content)}
      <div>
        <Button
          className={classes.closeButton}
          startIcon={<CloseIcon />}
          onClick={onButtonCloseClick}
        >
          Close
        </Button>
      </div>
    </div>
  );
}

DialogModal.propTypes = {
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array,
  onButtonCloseClick: PropTypes.func.isRequired,
};

DialogModal.defaultProps = {
  title: '',
  content: [],
};

export default DialogModal;
