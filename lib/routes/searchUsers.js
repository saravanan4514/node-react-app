'use strict';

let searchUsers;

searchUsers = (req, res) => {
  res.status(200).send({'success': 'success', "failure": 'failure'});
};

export default searchUsers;
