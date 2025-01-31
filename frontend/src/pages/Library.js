import React from 'react';
import './Library.css';

import gateImage from '../assest/gate.jpeg'
import mobyImage from '../assest/moby.jpeg'
import mockingImage from '../assest/mocking.jpeg'
import ninteenImage from '../assest/ninteen.png'

const Library = () => {
    const chapters = [
        {
            id: 1,
            title: 'Chapter 1',
            subchapters: [
                {
                    id: '1a',
                    title: 'Subchapter books 1',
                    books: [
                        { id: 1, title: 'hemanth', author: 'hemanth', cover: gateImage },
                        { id: 2, title: 'varun', author: 'varun', cover: gateImage },
                        { id: 3, title: 'prashanth', author: 'prashanth', cover: gateImage },
                    ],
                },
                {
                    id: '1b',
                    title: 'Subchapter books 2',
                    books: [
                        { id: 1, title: 'Book 1B-1', author: 'Author 4', cover: mobyImage },
                        { id: 2, title: 'Book 1B-2', author: 'Author 5', cover: mobyImage },
                        { id: 3, title: 'Book 1B-3', author: 'Author 6', cover: mobyImage },
                    ],
                },
                {
                    id: '1c',
                    title: 'Subchapter books 3',
                    books: [
                        { id: 1, title: 'Book 1C-1', author: 'Author 7', cover: mobyImage },
                        { id: 2, title: 'Book 1C-2', author: 'Author 8', cover: gateImage },
                        { id: 3, title: 'Book 1C-3', author: 'Author 9', cover: mobyImage },
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
                    title: 'Subchapter books 1',
                    books: [
                        { id: 1, title: 'Hemanth', author: 'Author 10', cover: mockingImage },
                        { id: 2, title: 'Prashanth', author: 'Author 11', cover: mockingImage },
                        { id: 3, title: 'Varun kumar', author: 'Author 12', cover: mockingImage },
                    ],
                },
            ],
        },
        {
            id: 3,
            title: 'Chapter 3',
            subchapters: [
                {
                    id: '3a',
                    title: 'Subchapter books 1',
                    books: [
                        { id: 1, title: 'Book 3A-1', author: 'Author 13', cover: ninteenImage },
                        { id: 2, title: 'Book 3A-2', author: 'Author 14', cover: ninteenImage },
                        { id: 3, title: 'Book 3A-3', author: 'Author 15', cover: ninteenImage },
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
                                <div className="books-grid">
                                    {subchapter.books.map((book) => (
                                        <div key={book.id} className="book-card">
                                            <img src={book.cover} alt={book.title} className="book-cover" />
                                            <h5 className="book-title">{book.title}</h5>
                                            <p className="book-author">{book.author}</p>
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

export default Library;