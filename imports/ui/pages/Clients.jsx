import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Clients } from './../../api/clients.js';

/*
// TEMPLATE SECTIONS
*/
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';


class ClientPage extends Component {
  constructor(props){
      super(props);
      this.renderClients = this.renderClients.bind(this);
  }
  cleanString(str) {
      if (str || typeof str == 'string') {
          return str.replace('+', '').replace(/^on$/i,'✓');
      } else {
          return str;
      }
  }
  renderClients(){
    return this.props.clients.map((client) => (
        <tr key={client._id}>
            <td>{ this.cleanString( client.firstName ) } { this.cleanString( client.lastName ) }</td>
            <td>{ this.cleanString( client.financialNeed ) }</td>
        </tr>
    ));
  }
  renderOne(){
      this.props.one.forEach(function(client){
          console.log( Object.keys(client) );
      })
  }
  render() {
      this.renderOne();
      this.renderClients();
    return (
        <div className="container">
            <Header />
            <div className="row column">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Financial Need</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderClients() }
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
  }
};

ClientPage.propTypes = {
  clients: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    clients: Clients.find({}, { sort: { createdAt: -1 } }).fetch(),
    one: Clients.find({_id:'RZETCREhrxAKY46JP'}).fetch()
  };
}, ClientPage);