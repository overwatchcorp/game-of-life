import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({ value }) => {
  if (value === 1) return <div className="displaycell active" />;
  return <div className="displaycell" />;
};

Cell.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Cell;
