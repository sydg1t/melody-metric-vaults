import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const delayDebounce = setTimeout(() => {
            setLoading(true);
            fetch(`/api/search?q=${encodeURIComponent(query)}`)
                .then(res => res.json())
                .then(data => setResults(data.data || []))
                .catch(err => console.error('Error during search:', err))
                .finally(() => setLoading(false));
        }, 500); // 500ms debounce

        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <div id='search-div' className='col-md-8 light-blue align-items-center'>
            <h1 className='mb-5'>
                Analytics for <span className='text-white'>Songs</span> <br /> and <span className='text-white'>Artists</span>
            </h1>
            <h3 className='my-5'>Search a song or artist <br /> for stream data</h3>
            <div className='search-width'>
                <input
                    type='text'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder='Search'
                    className='fs-4 py-2 px-2 rounded-0 w-100 no-focus'
                />              
                <div id='search-results' className={query ? '' : 'd-none'}>
                    {loading && <p>Loading...</p>}
                    {results.length > 0 && (
                        <ul className='w-100'>
                            {results.map(result => (
                                <Link to={`/track/${result.id}`} className='text-decoration-none text-white' key={result.id}>
                                <li key={result.id} className=' text-black'><img src={result.album.cover_small} /> {result.title}</li>
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
export { Search };