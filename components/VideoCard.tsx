import React from 'react';
import { Video } from '../types';
import { NextPage } from 'next';

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  return (
    <div>
      Video card
    </div>
  )
}

export default VideoCard
