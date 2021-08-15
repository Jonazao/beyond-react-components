import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import BaseSocialIcon from './BaseSocialIcon';
import socialIconsConfig from './socialConfigs';

const useStyles = makeStyles(() => ({
  button: {
    borderColor: (selectedBrand) => selectedBrand.color,
    backgroundColor: ({ selectedBrand, useIconBrandColor }) =>
      useIconBrandColor ? null : selectedBrand.color,
    '&:hover': {
      backgroundColor: ({ useIconBrandColor }) => (useIconBrandColor ? null : '#2f477a'),
    },
  },
}));

export default function BaseSocialButton({
  brand,
  iconSize,
  useIconBrandColor,
  className,
  children,
  ...rest
}) {
  const renderIcon = () => (
    <BaseSocialIcon brand={brand} useBrandColor={useIconBrandColor} fontSize={iconSize} />
  );
  const selectedBrand = socialIconsConfig[brand];
  if (!selectedBrand) {
    return null;
  }

  const classes = useStyles({ selectedBrand, useIconBrandColor });
  return (
    <Button className={clsx(classes.button, className)} startIcon={renderIcon()} {...rest}>
      {children}
    </Button>
  );
}

BaseSocialButton.propTypes = {
  brand: PropTypes.exact({
    icon: PropTypes.string,
    color: PropTypes.string,
  }),
  iconSize: PropTypes.string,
  useIconBrandColor: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element,
};

BaseSocialButton.defaultProps = {
  brand: {},
  iconSize: null,
  useIconBrandColor: true,
  className: null,
  children: null,
};
