import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createGrid as createGridAction } from '../actions';
import Cell from './Cell';

class GameComponent extends Component {
  componentWillMount() {
    const { createGrid } = this.props;
    createGrid(19, 19);
  }

  render() {
    const gridContainer = [];
    const GridDisplay = () => gridContainer;
    const { grid } = this.props;
    if (grid) {
      const values = [];
      let c = 0;
      grid.map(value => { values.push((c % 2)); c++; if (c === 2) c = 0; });
      console.log(values);
      const size = grid.size();
      let rowValues = [];
      values.map((v, i) => {
        if ((i) % size[0] === 0 && i > 0) {
          gridContainer.push(<div style={{ height: 20 }}>{[...rowValues]}</div>);
          rowValues = [];
        }
        return rowValues.push(<Cell value={v} />);
      });
      gridContainer.push(<div style={{ height: 20 }}>{[...rowValues]}</div>);
    }
    return (
      <div>
        Game!
        {
          (grid)
            ? <GridDisplay />
            : null
        }
      </div>
    );
  }
}

GameComponent.propTypes = {
  createGrid: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  xWidth: state.xWidth,
  yWidth: state.yWidth,
  grid: state.grid,
});

const mapDispatchToProps = dispatch => ({
  createGrid: (xWidth, yWidth) => dispatch(createGridAction(xWidth, yWidth)),
});

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComponent);

export default Game;
