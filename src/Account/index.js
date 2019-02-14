  import React, { Component } from 'react';


class Account extends Component {
  render() {
    return (
      <div className="account">
        <h2>{this.props.account} </h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="$1000" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
