import React from 'react';
import Post from './Post';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const data = [
  { posted: true, platform: 'Facebook', datePosted: new Date().toLocaleDateString(), likes: 8 },
  { posted: false, platform: 'Twitter', datePosted: new Date().toLocaleDateString(), likes: 6 },
  { posted: false, platform: 'Instragram', datePosted: new Date().toLocaleDateString(), likes: 3 },
  { posted: true, platform: 'Twitter', datePosted: new Date().toLocaleDateString(), likes: 1 },
  { posted: false, platform: 'Facebook', datePosted: new Date().toLocaleDateString(), likes: 10 }
];

const headerRows = [
  { id: 'platform', label: 'Platform' },
  { id: 'datePosted', label: 'Date Posted' },
  { id: 'likes', label: 'Likes' }
];

const Posts = () => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Completed</TableCell>
            {headerRows.map(header => (
              <TableCell id={header.id}>{header.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <Post data={row}></Post>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Posts;
