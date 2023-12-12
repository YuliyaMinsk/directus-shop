import { fetchData } from 'shared/helpers';
import { Post } from 'shared/types';

const getHomepagePosts = async (): Promise<Post[]> => {
  const data = await fetchData(
    `
    query HomepagePosts {
      posts {
        id
        title
        slug
        body
        featured_image 
        date_created
        date_updated
      }
    }
    `,
    {
      variables: {},
    },
  );

  return data.data.posts;
};

export { getHomepagePosts };
