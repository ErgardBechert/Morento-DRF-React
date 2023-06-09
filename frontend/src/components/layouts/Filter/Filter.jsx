
import React, { Component } from 'react';
import './Filter.scss';

export class Filter extends Component {
  state = {
    rangeValue: 0, // Set an initial value for rangeValue
  };

  handleRangeChange = (event) => {
    document.getElementById('rangevalue').textContent = event.target.value;
    this.setState({ rangeValue: event.target.value }); // Update the state with the new range value
  };

  handleFilterCars = () => {
    const typeCheckboxes = document.querySelectorAll('.side-bar__list:nth-child(1) input[type="checkbox"]');
    const capacityCheckboxes = document.querySelectorAll('.side-bar__list:nth-child(2) input[type="checkbox"]');
    const typeFilters = Array.from(typeCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.nextSibling.textContent);
    const minPrice = this.state.rangeValue; // Access the rangeValue from the state
    const capacityFilters = Array.from(capacityCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => parseInt(checkbox.nextSibling.textContent, 10));

    this.props.fetchData(typeFilters, capacityFilters, minPrice);
  };


  render() {
    const rangeStyles = {
      backgroundSize: '20% 100%',
    };

    const { rangeValue } = this.state;

    return (
      <div className="side-bar">
        <ul className="side-bar__list">
          <li>Type</li>
          <li key="sportcar">
            <input type="checkbox" />Спорткар
          </li>
          <li key="sedan">
            <input type="checkbox" />Седан
          </li>
          <li key="coupe">
            <input type="checkbox" />Купе
          </li>
          <li key="hatchback">
            <input type="checkbox" />Хэтчбек
          </li>
          <li key="suv">
            <input type="checkbox" />Внедорожник
          </li>
          <li key="minivan">
            <input type="checkbox" />Минивэн
          </li>
          <li key="crossover">
            <input type="checkbox" />кроссовер
          </li>
        </ul>
        <ul className="side-bar__list">
          <li>Capacity</li>
          <li key="capacity2">
            <input type="checkbox" />2 чел.
          </li>
          <li key="capacity4">
            <input type="checkbox" />4 чел.
          </li>
          <li key="capacity6">
            <input type="checkbox" />6 чел.
          </li>
          <li key="capacity8">
            <input type="checkbox" />8 чел. и больше
          </li>
        </ul>
        <ul className="side-bar__list">
          <li>Price</li>
          <div className="progress-price">
            <input
              type="range"
              name="title__size"
              min="5000"
              max="15000"
              step="100"
              defaultValue="5000"
              onInput={this.handleRangeChange}
              style={rangeStyles}
            />

            <div className="progress-price__info">
              <div className="progress-price__current-value">
                <output id="rangevalue">{rangeValue}</output>
              </div>
              <div className="progress-price__max-value">15 000</div>
            </div>
          </div>
        </ul>
        <button onClick={this.handleFilterCars}>Filter</button>
      </div>
    );
  }
}

export default Filter;