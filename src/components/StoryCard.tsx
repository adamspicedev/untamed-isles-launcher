import React, { FC } from 'react';
import { Story } from '../data';

interface StoryCardProps {
  story: Story;
}

const StoryCard: FC<StoryCardProps> = ({ story }) => {
  return (
    <>
      <div className="max-w-sm mb-8 overflow-hidden text-white bg-black rounded shadow-lg cursor-pointer">
        <img
          className="w-full"
          src={story.image}
          alt="Sunset in the mountains"
        />

        <div className="z-30 px-6 py-4 mb-8">
          <div className="mb-2 text-xl font-bold">{story.title}</div>
          <span className="text-xs ">{story.date}</span>
          <p className="mb-8 text-base">{story.content}</p>
          <a
            href={story.url}
            className="z-30 px-6 py-4 rounded-lg font-geizer bg-untamed-blue hover:bg-untamed-glow focus:outline-none"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
