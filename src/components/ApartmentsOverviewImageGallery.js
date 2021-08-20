import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: '10rem 0',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titlesBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const itemData = [
  { img: 'glr1', title: 'Cozy natural apartment' },
  { img: 'glr2', title: 'Rich looking with gold details apartment' },
  { img: 'glr3', title: 'Modern minimal apartment' },
  { img: 'glr4', title: 'Jungle modern minimalistic apartment' },
  { img: 'glr5', title: 'Spacious tall exotic apartment' },
];

const ApartmentsOverviewImageGallery = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList
        className={classes.imageList}
        cols={2}
        rowHeight={400}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/imageGallery/' +
                item.img +
                '.jpg'
              }
              alt={item.title}
            />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ApartmentsOverviewImageGallery;
