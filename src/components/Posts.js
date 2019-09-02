import React, { useEffect } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/posts';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Box } from '@material-ui/core';
import { GreenButton } from './layout/ColorOverrides';
import { Add } from '@material-ui/icons';

const headerRows = [
  { id: 'platform', label: 'Platform' },
  { id: 'datePosted', label: 'Date Posted' },
  { id: 'likes', label: 'Likes' }
];

const Posts = ({ posts: { loading, postItems }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <GreenButton variant='extended' size='medium'>
        <Add /> {''}Add Post
      </GreenButton>
      {loading ? (
        <span>Loading</span>
      ) : (
        <Box pt={5}>
          <Paper>
            <Table className='posts-table'>
              <TableHead className='posts-table-header'>
                <TableRow>
                  <TableCell>Completed</TableCell>
                  {headerRows.map(header => (
                    <TableCell key={header.id}>{header.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {postItems.map(post => (
                  <Post post={post} key={post.id}></Post>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      )}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
