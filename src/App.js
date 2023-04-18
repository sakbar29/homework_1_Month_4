import React from "react";
import { Remarkable } from "remarkable";

class Plice extends React.Component{
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {value : "hello world"};
  
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  getRawMarkup () {
    const md = new Remarkable();
    return { __html: md.render(this.state.value)};
  }

  render () {
    return (
      <div className="Plice"> 
      <h3>enter data</h3>
      <label htmlFor="markdown-content">enter form</label>
      <textarea 
        id="markdown-content" 
        onChange={this.handleChange}
        defaultValue={this.state.value}
      />
      <h3>conclusion</h3>
      <div 
        className="content"
        dangerouslySetInnerHTML={this.getRawMarkup()}
      />
      </div>
    )
  }
}

export default Plice;