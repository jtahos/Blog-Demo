import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS =[
    { title: 'getting started with nextjs', 
      image: 'getting-started-nextjs.png', 
      excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
      date: '2023-02-09', 
      slug: 'getting-started-with-nextjs' 
    },
    { title: 'getting started with nextjs', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
    date: '2023-02-09', 
    slug: 'getting-started-with-nextjs2' 
  },
  { title: 'getting started with nextjs', 
  image: 'getting-started-nextjs.png', 
  excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
  date: '2023-02-09', 
  slug: 'getting-started-with-nextjs3' 
},
{ title: 'getting started with nextjs', 
image: 'getting-started-nextjs.png', 
excerpt: 'Nextjs is the React framework for produktion - it makes building fillstack React apps and sites a breaze and ships with built-in SSR.', 
date: '2023-02-09', 
slug: 'getting-started-with-nextjs4' 
}
];

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage;