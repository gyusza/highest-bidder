pragma solidity ^0.4.4;

contract HighestBidder {
	string public currentText;
	uint public currentPrice;
	address owner;

	function HighestBidder() {
		currentText = '';
		currentPrice = 0;
		owner = msg.sender;
	}

	function bid(string newText) payable returns(bool) {
		require(msg.value > currentPrice);
		currentText = newText;
		currentPrice = msg.value;
		owner.transfer(msg.value);
		return true;
	}

	function admin(string newText, uint newPrice) returns(bool) {
		require(msg.sender == owner);
		currentText = newText;
		currentPrice = newPrice;
		return true;
	}
}
