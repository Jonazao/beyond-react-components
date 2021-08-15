import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import socialIconsConfig from './socialConfigs';

const useStyles = makeStyles(() => ({
  icon: {
    color: ({ selectedBrand, useBrandColor }) => useBrandColor && selectedBrand.color,
  },
}));

export default function BaseSocialIcon({ brand, useBrandColor, color, className, ...rest }) {
  const selectedBrand = socialIconsConfig[brand];
  if (!selectedBrand) {
    return null;
  }
  const classes = useStyles({ selectedBrand, useBrandColor });
  return (
    <FontAwesomeIcon
      className={clsx(classes.icon, className)}
      {...rest}
      icon={['fab', selectedBrand.icon]}
    />
  );
}

BaseSocialIcon.propTypes = {
  color: PropTypes.string,
  useBrandColor: PropTypes.bool,
  brand: PropTypes.exact({
    icon: PropTypes.string,
    color: PropTypes.string,
  }),
  className: PropTypes.string,
};

BaseSocialIcon.defaultProps = {
  color: null,
  useBrandColor: true,
  brand: {},
  className: null,
};
