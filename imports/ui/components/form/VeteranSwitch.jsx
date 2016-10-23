import React, { Component, PropTypes } from 'react';
 
export default class Veteran extends Component {
    constructor(props){
        super(props);
        this.switchOn = this.switchOn.bind(this);
        this.switchOff = this.switchOff.bind(this);
    }    
  switchOn(ev){
      var switchObject = {
          isVeteran: true
      };
      this.props.handleSwitch( switchObject, ev.target );
  }
  switchOff(ev){
      var switchObject = {
          isVeteran: false
      };
      this.props.handleSwitch( switchObject, ev.target );
  }
  render() {
    return (
        <div id={ this.props.id } className={`form-part ${ this.props.additionalClasses || '' }`}>
            <div className="form-part-header">
                <p>Form Part Header</p>
            </div>
            <h2 className="coach">"Have you served in the military?"</h2>
            <button className="button" onClick={ this.switchOn }>Yes</button>
            <button className="button" onClick={ this.switchOff }>No</button>
        </div>
    );
  }
}