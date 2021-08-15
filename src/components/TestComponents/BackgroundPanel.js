import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  panel: {
    display: 'flex',
    width: '820px',
    height: '360px',
    backgroundImage: ({ backgroundImage }) => `url("${backgroundImage}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  firstPlaceContainer: {
    width: '360px',
    height: '360px',
    backgroundColor: 'red',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restPlayersContainer: {
    width: '460px',
    height: '360px',
    backgroundColor: 'blue',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  topFourRow: {
    width: '460px',
    height: '220px',
    backgroundColor: 'yellow',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
  },
  topEightRow: {
    width: '460px',
    height: '140px',
    backgroundColor: 'pink',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
  },
  firstPlaceCard: {
    width: '80%',
    height: '80%',
    border: '20px solid',
    borderImageSource:
      'url("https://toppng.com/uploads/preview/dashed-line-clip-art-clip-art-borders-dots-115632671336jvc5glbta.png")',
    borderImageSlice: '100 100',
  },
  topFourContainer: {
    width: '33%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topFourCard: {
    position: 'relative',
    width: '80%',
    height: 0,
    paddingBottom: '80%',
  },
  topEightContainer: {
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topEightCard: {
    position: 'relative',
    width: '80%',
    height: 0,
    paddingBottom: '80%',
  },
}));

export default function BackgroundPanel({ backgroundImage }) {
  const classes = useStyles({ backgroundImage });
  return (
    <Paper className={classes.panel}>
      <div className={classes.firstPlaceContainer}>
        <Paper className={classes.firstPlaceCard}>First</Paper>
      </div>
      <div className={classes.restPlayersContainer}>
        <div className={classes.topFourRow}>
          <div className={classes.topFourContainer}>
            <Paper className={classes.topFourCard}>Second</Paper>
          </div>
          <div className={classes.topFourContainer}>
            <Paper className={classes.topFourCard}>Third</Paper>
          </div>
          <div className={classes.topFourContainer}>
            <Paper className={classes.topFourCard}>Fourth</Paper>
          </div>
        </div>
        <div className={classes.topEightRow}>
          <div className={classes.topEightContainer}>
            <Paper className={classes.topEightCard}>Fifth/Sixth</Paper>
          </div>
          <div className={classes.topEightContainer}>
            <Paper className={classes.topEightCard}>Fifth/Sixth</Paper>
          </div>
          <div className={classes.topEightContainer}>
            <Paper className={classes.topEightCard}>Seventh/Eigth</Paper>
          </div>
          <div className={classes.topEightContainer}>
            <Paper className={classes.topEightCard}>Seventh/Eigth</Paper>
          </div>
        </div>
      </div>
    </Paper>
  );
}

BackgroundPanel.propTypes = {
  backgroundImage: PropTypes.string,
};

BackgroundPanel.defaultProps = {
  backgroundImage:
    'https://e7.pngegg.com/pngimages/709/358/png-clipart-price-toyservice-soil-business-no-till-farming-no-rectangle-pie.png',
};

// https://i.pinimg.com/originals/8f/f5/98/8ff5982a7ca08c587aa2a9002b57968e.jpg
