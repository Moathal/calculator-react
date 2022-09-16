import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function handleClick(event, state, setter) {
  const buttonName = event.target.innerText;
  const result = calculate(state, buttonName);
  setter(result);
}

const Calculator = () => {
  const [state, setter] = useState({ total: 0, operation: null, next: null });
  const { total, next, operation } = state;
  return (
    <div className="calculatorPage">
      <h2 className="calcHead">Let&apos;s do some math!</h2>
      <div className="calc">
        <div className="scrn">
          {total}
          {operation}
          {next}
        </div>
        <table cellSpacing="1" className="numsANDops">
          <tr>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn AC"
              >
                AC
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn"
              >
                +/-
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn"
              >
                %
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
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
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                7
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                8
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                9
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
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
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                4
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                5
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                6
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
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
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                1
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                2
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num"
              >
                3
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
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
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn num wide"
              >
                0
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn"
              >
                .
              </button>
            </td>
            <td>
              <button
                onClick={(event) => handleClick(event, state, setter)}
                type="button"
                className="btn op"
              >
                =
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
