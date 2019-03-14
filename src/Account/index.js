  import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
  super(props)
  this.inputBox = React.createRef()
    this.state = {
        balance: 0
    }
    // if this is not bound you use the bottom line
  this.handleDepositClick = this.handleDepositClick.bind(this)
  this.handleWithdrawClick = this.handleWithdrawClick.bind(this)
}
//use fat arrow syntax to bind this to methods in classes

    handleDepositClick(event) {
        event.preventDefault();
        const amount = parseInt(this.inputBox.value);
        const newBalance = this.state.balance + amount;
        this.setState({
            balance: newBalance
        })
        this.inputBox.value = '';
    }
    handleWithdrawClick(event) {
        event.preventDefault();
        const amount = parseInt(this.inputBox.value);
        const newBalance = this.state.balance - amount;
        if(newBalance <= 0){
          alert('You dont have enough')
        } else {
          this.setState({
            balance: newBalance
          })
        }
        this.inputBox.value = '';
    }

  render() {
    return (
      <div className="account">
        <h2>{this.props.account} </h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox =input} />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}

export default Account;
