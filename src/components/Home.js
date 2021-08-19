import React from 'react';
import backgroundMain from '../img/livingRoom.jpg';
import { makeStyles } from '@material-ui/core';
import SectionImgWithText from './SectionImgWithText';

const useStyles = makeStyles({
  backgroundImg: {
    height: '85vh',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
    clipPath: 'ellipse(100% 95% at 50% 0%)',
  },
  topImgContainer: {
    height: '75vh',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.topImgContainer}>
        <img
          className={classes.backgroundImg}
          src={backgroundMain}
          alt="Living Room"
        />
      </div>
      <SectionImgWithText
        imgLocation="right"
        imgSrc="home1"
        title="This is a title">
        On the other hand, we denounce with righteous indignation and
        dislike men who are so beguiled and demoralized by the charms
        of pleasure of the moment, so blinded by desire, that they
        cannot foresee the pain and trouble that are bound to ensue;
        and equal blame belongs to those who fail in their duty
        through weakness of will, which is the same as saying through
        shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish.
      </SectionImgWithText>
    </>
  );
};

export default Home;
