import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [starCount, setStarCount] = useState(null);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/sourabh32/homies');
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching star count:', error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <nav className=" py-2 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          
            <Link to="/">
            <span className="text-grey-800 font-semibold text-lg">Klr-Plate</span>
            </Link>
        
          <div className="flex items-center space-x-4">
            {/* How To Link */}
            <Link to="/howto">Guide?</Link>
           
            <a href="/">
                <div className='flex gap-2 border rounded-md px-2 py-1'>

               
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<span> {starCount !== null ? starCount : 'Loading...'}</span>
</div>
            </a>
           

             
              
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
