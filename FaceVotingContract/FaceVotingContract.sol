pragma solidity ^0.4.18;

contract FaceVotingContract {
  uint minimumVoteCount;
  uint currentVoteCount;

  address owner;
  bool votingAvailable;

  mapping (uint => uint) public artFaces;
  mapping (uint => bool) public validArtFaces;

  uint internal votingOpeningTime;

  event VotingFinished(
    bool isVotingOpen
  );

  //constructor to initialise faces to check for validity
  function FaceVotingContract() {
    //instantiate the faces to 0 votes
    for (uint i = 0; i < 4; i++) {
      artFaces[i] = 0;
      validArtFaces[i] = true;
    }

    // set a default value for the minimum vote count
    minimumVoteCount = 10;
    owner = msg.sender;
    setup();
  }

  function setup() {
    // instantiate the voting opening time
    votingOpeningTime = now;
    votingAvailable = true;
  }

  //get minimum vote count
  function getMinimumVoteCount() view public returns (uint) {
    return minimumVoteCount;
  }

  // get current vote count
  function getCurrentVoteCount() view public returns (uint) {
    return currentVoteCount;
  }

  // check the face art votes
  function getVotesForArtPiece(uint _artIndex) view public returns (uint) {
    return artFaces[_artIndex];
  }

  function setMinimumVoteCount(uint _minVotes) public {
    minimumVoteCount = _minVotes;
  }

  function resetData() public {    
    // this is called after a round has been finished and the next round is due
    currentVoteCount = 0;
    votingOpeningTime = 0;  
    
    //reset the votes
    for (uint i = 0; i < 4; i++) {
      artFaces[i] = 0;
    }
  }
  
  function voteForArtPiece(uint _faceIdx) onlyForValidFaces () {
    // 2 constraints
    // vote count is at least the minimum and 3 minutes have passed
    if ((currentVoteCount >= minimumVoteCount) && (now > (votingOpeningTime + 3 minutes)) && votingAvailable) {
      votingAvailable = !votingAvailable;   
      resetData();   
      VotingFinished(votingAvailable);
    } else {
       // increment the vote count 
      currentVoteCount += 1;
      artFaces[_faceIdx] += 1;
    }
  }

  modifier onlyForValidFaces() {
    require (votingAvailable);
    _;
  }

  // function isValidFace(uint _faceIdx) returns (bool) {
  //   return validArtFaces[_faceIdx];
  // }

  // function isMinimumReached() returns (bool) {
  //   return currentVoteCount >= minimumVoteCount;
  // }

  // oracle function
  function isRoundOver() public returns (bool) {
    return now > votingOpeningTime + 3 minutes;
  }
}
