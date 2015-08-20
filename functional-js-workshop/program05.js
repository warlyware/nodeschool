function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return !submittedUsers.some(function(submittedUser) {
      return !goodUsers.some(function(goodUser) {
        return goodUser.id == submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;
