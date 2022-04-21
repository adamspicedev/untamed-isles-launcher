import React from 'react';
import { stories } from '../data';
import StoryCard from './StoryCard';

const Stories = () => {
  return (
    <div className="grid grid-cols-2 overflow-y-auto">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;
