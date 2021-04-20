import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const socialIcons = {
  facebook: {
    icon:'facebook',
    color:'#3b5999!important'
  },
  twitter: {
    icon:'twitter',
    color: '#1da1f2!important'
  },
  google: {
    icon:'google', 
    color:'#dd4b39!important'
  },
  instagram: {
    icon:'instagram',
    color:'#e4405f!important'
  },
  pinterest: {
    icon: 'pinterest',
    color:'#bd081c!important'
  },
  youtube: {
    icon: 'youtube',
    color:'#cd201f!important'
  },
  slack: {
    icon:'slack',
    color:'#3aaf85!important'
  },
  dribbble: {
    icon:'dribbble',
    color:'#ea4c89!important'
  },
  github: {
    icon:'github',
    color:'#222!important'
  }
}

const useStyles = makeStyles((theme) => ({
  icon: {
    color: (brand) => brand.color
  },
}));

export default function BaseSocialIcon({brand}) {
  const selectedBrand = socialIcons[brand];
  if(!selectedBrand){
    return null;
  }
  const classes = useStyles(selectedBrand);
  return (
    <div>
      <Icon className={classes.icon} fontSize="large">
        <FontAwesomeIcon icon={['fab', selectedBrand.icon]}   />
      </Icon>
  </div>
  );
}
