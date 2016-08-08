import React, {Component} from 'react';
import classNames from 'classnames';

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedInput: ''
    }
  }

  get styles() {
    return {
      display: "inline-block",
      margin: "0 5px"
    }
  }

  handleChange = (e) => {
    let { value } = e.target;
    let { clickHandler } = this.props;
    this.setState({ checkedInput: value});
    if (clickHandler) clickHandler();
  };

  render() {
    let { className, values, onClickHandler } = this.props;
    let { checkedInput } = this.state;

    return (
      <div className={ classNames(className) }>
        {
          values.map( (value, i) => {
            return (
              <div key={ i } style={ this.styles }>
                <input
                  className={ classNames('RadioGroup__input') }
                  type="radio"
                  value={ value }
                  checked={ value === checkedInput? true: false }
                  onChange={ this.handleChange }/>
                <label>{ value }</label>
              </div>
            )
          })
        }
      </div>
    )
  }
}
