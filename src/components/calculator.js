import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calc">
        <div className="scrn">0</div>
        <table cellSpacing="0" className="numsANDops">
          <tr>
            <td>
              <button type="button" className="btn AC">
                AC
              </button>
            </td>
            <td>
              <button type="button" className="btn">
                +/-
              </button>
            </td>
            <td>
              <button type="button" className="btn">
                %
              </button>
            </td>
            <td>
              <button type="button" className="btn op">
                &divide;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn num">
                7
              </button>
            </td>
            <td>
              <button type="button" className="btn num">
                8
              </button>
            </td>
            <td>
              <button type="button" className="btn num">
                9
              </button>
            </td>
            <td>
              <button type="button" className="btn op">
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn num">
                4
              </button>
            </td>
            <td>
              <button type="button" className="btn num">
                5
              </button>
            </td>
            <td>
              <button type="button" className="btn num">
                6
              </button>
            </td>
            <td>
              <button type="button" className="btn op">
                &times;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn num">
                1
              </button>
            </td>
            <td>
              <button type="button" className="btn num">
                2
              </button>
            </td>
            <td>
              <button type="button" className="btn num">
                3
              </button>
            </td>
            <td>
              <button type="button" className="btn op">
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="button" className="btn num wide">
                0
              </button>
            </td>
            <td>
              <button type="button" className="btn">
                .
              </button>
            </td>
            <td>
              <button type="button" className="btn op">
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
