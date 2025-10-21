const API_BASE_URL = 'https://api.tvmaze.com';

export const fetchShows = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows`);
    if (!response.ok) throw new Error('Failed to fetch shows');
    return await response.json();
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

export const fetchShowById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows/${id}`);
    if (!response.ok) throw new Error('Failed to fetch show details');
    return await response.json();
  } catch (error) {
    console.error('Error fetching show details:', error);
    throw error;
  }
};

export const searchShows = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to search shows');
    const results = await response.json();
    return results.map(result => result.show);
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
};
