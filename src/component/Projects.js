import React, { useEffect, useState } from 'react'

const Projects = () => {

    const projects = {
        'Stock_Market': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477057/projects/stock_market.png',
    }

    const [filteredGithubRepos, setFilteredGithubRepos] = useState(null)
    const [visibleProjects, setVisibleProjects] = useState(3)
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        (async function fetchProject() {
            const response = await fetch('https://api.github.com/users/bsingh6636/repos')
            const data = await response.json()
            const filteredData = data.filter((d) => projects.hasOwnProperty(d.name))
            setFilteredGithubRepos(filteredData)
        })();
        // eslint-disable-next-line
    }, [])



    return filteredGithubRepos === null ? null : (
        <div className='mt-20'>
            <span className='uppercase font-extrabold text-3xl md:text-5xl font-serif border-b-4 md:border-b-8 border-blue-400 pb-2 md:pb-4'>
                Projects
            </span>
            <div className='flex flex-wrap justify-center md:justify-start'>
                {filteredGithubRepos.slice(0, visibleProjects).map((repo) => (
                    <div key={repo.name} className='mt-10 p-4 w-full sm:w-1/2 lg:w-1/3'>
                        <div className='bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-101 transition-transform duration-500 ease-out'>
                            <img className='w-full h-48 object-cover transition-transform duration-500 ease-out hover:scale-110' src={projects[repo.name]} alt={repo.name} />
                            <div className='p-4'>
                                <h1 className='text-2xl font-bold text-green-600 mb-2 shadow-md p-1 rounded-md'>{repo.name}</h1>
                                <p className='text-lg text-gray-800 mb-4 shadow-sm p-1 rounded-md max-md:text-xs'>{repo.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {repo.topics.map((topic, index) => (
                                        <span key={index} className='bg-blue-100 text-blue-600 text-sm font-semibold py-1 px-2 rounded-lg shadow-md'>
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <h1 className='mb-2'>
                                    <span className='text-indigo-600 font-medium'>Live Link: </span>
                                    <span className='text-indigo-400 cursor-pointer hover:underline hover:text-indigo-500 transition-colors duration-300' onClick={() => window.open(repo.homepage)}>
                                        {repo.homepage}
                                    </span>
                                </h1>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        
    )
}

export default Projects
