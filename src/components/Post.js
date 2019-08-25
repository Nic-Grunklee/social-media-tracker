import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const Post = props => {
  const { posted, platform, datePosted, likes } = props.data;

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={posted}></Checkbox>
      </TableCell>
      <TableCell>{platform}</TableCell>
      <TableCell>{datePosted}</TableCell>
      <TableCell>{likes}</TableCell>
    </TableRow>
  );
};

export default Post;
