import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCheck } from '../actions/posts';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const Post = ({ post, updateCheck }) => {
  const { id, posted, platform, datePosted, likes } = post;

  // const changePostChecked = event => {
  //   setState({ ...state, posted: event.target.checked });
  // };

  return (
    <TableRow>
      <TableCell>
        <Checkbox onClick={() => updateCheck(id)} checked={posted}></Checkbox>
      </TableCell>
      <TableCell>{platform}</TableCell>
      <TableCell>{datePosted}</TableCell>
      <TableCell>{likes}</TableCell>
    </TableRow>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  updateCheck: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateCheck }
)(Post);
