import React from 'react';
import BookCard from './BookCard';

function CourseCards({data}) {
    const displayCourseCards = (bookData, index) => {
        return (
            <BookCard 
                key={index}
                title={bookData.volumeInfo.title}
                authors={bookData.volumeInfo.authors.toString()}
                publisher={bookData.volumeInfo.publisher}
                publishedDate={bookData.volumeInfo.publishedDate}
            />
        )
    }

    return (
        <div className="grid">
            { data.map(displayCourseCards) }
        </div>
    );
}

export default CourseCards;