import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ModalHeader from './ModalHeader';
import ModalText from './ModalText';

const useStyles = makeStyles(() => ({
  main: {
    marginBottom: '8px',
  },
  listItem: {
    padding: 0,
  },
  nestedListItem: {
    paddingLeft: '10px',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    marginTop: 0,
    marginBottom: 0,
  },
}));

function ModalList({ color, header, items }) {
  const classes = useStyles({ color });
  return (
    <List className={classes.main} disablePadding>
      <ListItem className={classes.listItem}>
        <ListItemText>
          <ModalHeader header={header} color={color} />
        </ListItemText>
      </ListItem>
      {items.map((item) => (
        <ListItem className={classes.nestedListItem}>
          <ListItemText className={classes.listItemText}>
            <ModalText text={item.text} color={item.color} />
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

ModalList.propTypes = {
  color: PropTypes.string,
  header: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
};

ModalList.defaultProps = {
  color: '#252733',
  header: '',
  items: [],
};

export default ModalList;
