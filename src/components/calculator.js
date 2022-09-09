import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc">
        <div className="scrn">
          {total}
          {operation}
          {next}
        </div>
        <table cellSpacing="0" className="numsANDops">
          <tr>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn AC"
              >
                AC
              </button>
            </td>
            <td>
              <button onClick={this.handleClick} type="button" className="btn">
                +/-
              </button>
            </td>
            <td>
              <button onClick={this.handleClick} type="button" className="btn">
                %
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn op"
              >
                ÷
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                7
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                8
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                9
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn op"
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                4
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                5
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                6
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn op"
              >
                x
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                1
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                2
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num"
              >
                3
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn op"
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                onClick={this.handleClick}
                type="button"
                className="btn num wide"
              >
                0
              </button>
            </td>
            <td>
              <button onClick={this.handleClick} type="button" className="btn">
                .
              </button>
            </td>
            <td>
              <button
                onClick={this.handleClick}
                type="button"
                className="btn op"
              >
                =
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
