export type Story = {
  id: number;
  title: string;
  date: string;
  url: string;
  image: string;
  content: string;
};

export const stories: Story[] = [
  {
    id: 1,
    title: 'Developer Update - March 2022',
    date: '25th April 2022',
    image: 'assets/stories/DeveloperUpdate1080pCrystal.webp',
    url: 'https://untamedisles.com/developer-update-march-2022/',
    content:
      'Hey Tamers, Welcome to the Untamed Isles March 2022 Update! You’ll notice this one looks a bit different and combines the elements of our developer updates, monthly news & content drops. This one is also the very first to include a video version to go with it. Excited? Us too!...',
  },
  {
    id: 2,
    title: 'Closed Beta Round 1 FAQ',
    date: '14th April 2022',
    image: 'assets/stories/Brackis-and-tamer.webp',
    url: 'https://untamedisles.com/closed-beta-round-1-weekend/',
    content:
      'Hey Tamers, We are so excited to welcome you to our Closed Beta playtest! The team have been working hard to put together some new features like dual combat and tame forge, as well as expand the island and introduce some amazing animations & visual...',
  },
  {
    id: 3,
    title: 'Everything we know about Closed Beta (so far)',
    date: '26th March 2022',
    image: 'assets/stories/Cave_Night_web.webp',
    url: 'https://untamedisles.com/closed-beta-faq/',
    content:
      'Hey tamers, Closed beta is just over one week away and we are so excited. There’s a bit that we know now, as well as a lot that is being kept as surprises for our tamers. For everything you need to know...',
  },
];
