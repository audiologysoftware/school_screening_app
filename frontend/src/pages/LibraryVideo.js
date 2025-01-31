import React from 'react';
import ReactPlayer from 'react-player';
import './LibraryVideo.css';

const LibraryVideo = () => {
    const chapters = [
        {
            id: 1,
            title: 'Chapter 1',
            subchapters: [
                {
                    id: '1a',
                    title: 'Subchapters',
                    videos: [
                        { id: 1, title: 'Nada upashama', author: '1', url: 'https://youtu.be/aEWv9KOgHg4?si=sJ6WKIKfpMVHJO0h' },
                        { id: 2, title: 'Video 1A-2', author: 'Author 2', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                        { id: 3, title: 'Video 1A-3', author: 'Author 3', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                    ],
                },
                {
                    id: '1b',
                    title: 'Subchapters',
                    videos: [
                        { id: 1, title: 'Video 1B-1', author: 'Author 4', url: 'https://www.w3schools.com/html/movie.mp4' },
                        { id: 2, title: 'Video 1B-2', author: 'Author 5', url: 'https://www.w3schools.com/html/movie.mp4' },
                        { id: 3, title: 'Video 1B-3', author: 'Author 6', url: 'https://www.w3schools.com/html/movie.mp4' },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: 'Chapter 2',
            subchapters: [
                {
                    id: '2a',
                    title: 'Subchapter Videos 1',
                    videos: [
                        { id: 1, title: 'Video 2A-1', author: 'Author 7', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                        { id: 2, title: 'Video 2A-2', author: 'Author 8', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="library-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Chapters</h2>
                <ul>
                    {chapters.map((chapter) => (
                        <li key={chapter.id}>
                            <a href={`#chapter-${chapter.id}`} className="chapter-link">
                                {chapter.title}
                            </a>
                            <ul>
                                {chapter.subchapters.map((subchapter) => (
                                    <li key={subchapter.id}>
                                        <a href={`#subchapter-${subchapter.id}`} className="subchapter-link">
                                            {subchapter.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="content">
                {chapters.map((chapter) => (
                    <div id={`chapter-${chapter.id}`} key={chapter.id} className="chapter-section">
                        <h2 className="chapter-title">{chapter.title}</h2>
                        {chapter.subchapters.map((subchapter) => (
                            <div id={`subchapter-${subchapter.id}`} key={subchapter.id} className="subchapter-section">
                                <h3 className="subchapter-title">{subchapter.title}</h3>
                                <div className="video-grid-container">
                                    {subchapter.videos.map((video) => (
                                        <div key={video.id} className="video-item-card">
                                            <ReactPlayer
                                                className="video-element"
                                                url={video.url}
                                                controls
                                                width="100%"
                                                height="180px" // Adjust height as needed
                                            />
                                            <h5 className="video-item-title">{video.title}</h5>
                                            <p className="video-item-author"> {video.author}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryVideo;
