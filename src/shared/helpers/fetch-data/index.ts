const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API || '';

const CACHE_DURATION = 3600;

const fetchData = async (query: string, variables?: {}) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(graphqlAPI, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: CACHE_DURATION },
  });

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data;
};

export { fetchData };
