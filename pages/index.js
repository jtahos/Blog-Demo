import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS =[
    { title: 'getting started with nextjs', 
      image: 'getting-started-nextjs.png', 
      excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
      date: '2023-02-09', 
      slug: 'getting-started-with-nextjs' 
    },
    { title: 'getting started with nextjs2', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
    date: '2023-02-09', 
    slug: 'getting-started-with-nextjs2' 
  },
  { title: 'getting started with nextjs3', 
  image: 'getting-started-nextjs.png', 
  excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
  date: '2023-02-09', 
  slug: 'getting-started-with-nextjs3' 
},
{ title: 'getting started with nextjs4', 
image: 'getting-started-nextjs.png', 
excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
date: '2023-02-09', 
slug: 'getting-started-with-nextjs4' 
}
];

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    );
    
}

export default HomePage;



// 1) hero => Present ourselves
// 2) Featured Posts
// 3) here we keep the page simple and lean, 
// and we won't use stilling here instead we will use seperate react components,
// that we will place in here