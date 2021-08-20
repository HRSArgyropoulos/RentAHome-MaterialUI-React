import React from 'react';
import backgroundMain from '../img/livingRoom.jpg';
import { makeStyles } from '@material-ui/core';
import SectionImgWithText from './SectionImgWithText';
import ApartmentsOverviewImageGallery from './ApartmentsOverviewImageGallery';
import BookApartmentRedirect from './BookApartmentRedirect';

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
        title="Stay in your dream apartment">
        On the other hand, we denounce with righteous indignation and
        dislike men who are so beguiled and demoralized by the charms
        of pleasure of the moment, so blinded by desire, that they
        cannot foresee the pain and trouble that are bound to ensue;
        and equal blame belongs to those who fail in their duty
        through weakness of will, which is the same as saying through
        shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish. Sed vehicula congue lacus, quis
        finibus risus ornare nec. Donec iaculis velit ac malesuada
        varius.
      </SectionImgWithText>
      <SectionImgWithText
        imgLocation="left"
        imgSrc="home2"
        title="You do not have to worry about extra costs">
        Integer euismod ac urna nec vulputate. Nulla varius sed nisl
        id pharetra. Quisque sed mauris vel arcu blandit pulvinar
        vitae eget diam. Vivamus vitae dolor molestie erat tempus
        viverra non eu tortor. Nullam luctus fermentum velit et
        molestie. Sed non sollicitudin nulla. Quisque at auctor ex,
        quis sodales velit. Praesent commodo, massa id posuere auctor,
        neque metus volutpat urna, eget bibendum risus mi nec lectus.
        Nullam mattis efficitur condimentum. Pellentesque in dignissim
        libero.
      </SectionImgWithText>
      <ApartmentsOverviewImageGallery />
      <BookApartmentRedirect />
    </>
  );
};

export default Home;
