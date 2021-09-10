import React from 'react';
import useStore from '../../store';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: '70%',
    margin: '1rem auto',
    textAlign: 'center',
  },
  table: {
    margin: '1rem 0',
    '& .MuiTableHead-root .MuiTableCell-root': {
      width: '50%',
    },
    minWidth: 300,
  },
  property: {
    marginRight: '1rem',
  },
});

const StepperSummary = () => {
  const classes = useStyles();

  const formData = useStore((state) => state.hostStepperForm);
  const apartmentData = formData.apartment;

  // capitalize first letter helper for summary titles
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        {/* HOST DETAILS */}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Host</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{formData.hostId}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{formData.hostName}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* APARTMENT / PROPERTY DETAILS */}
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(apartmentData)
              .filter(
                (property) => property !== 'availableDatesInput'
              )
              .map((property, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {capitalizeFirstLetter(property)}
                  </TableCell>
                  <TableCell>
                    {property === 'availableDates'
                      ? apartmentData[property].join(', ')
                      : apartmentData[property]}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StepperSummary;
