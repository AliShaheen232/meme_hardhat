// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract Lock {
    struct UserData {
        address userAddress;
        uint256 amount;
        uint256 reward;
    }

    struct RewardData {
        uint256 amount;
        uint256 reward;
    }

    UserData[] public usersData;
    mapping(address => RewardData) public userRewardData;

    constructor() payable {}

    function addTuples(UserData[] memory _usersData) public returns (bool) {
        for (uint256 i = 0; i < usersData.length; i++) {
            usersData.push(_usersData[i]);
        }
        return true;
    }

    function addUserData(UserData[] memory _usersData) public returns (bool) {
        for (uint256 i = 0; i < _usersData.length; i++) {
            address _userAddress = _usersData[i].userAddress;

            userRewardData[_userAddress] = RewardData(
                _usersData[i].amount,
                _usersData[i].reward
            );
        }

        return true;
    }
}
