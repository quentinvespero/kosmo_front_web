import React from 'react'

const AddPostButton = () => {
    return (
        <div className='addPostButton'>
            <div className="addPostButton-img">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.75" y="12.7499" width="28.5" height="4.5" rx="2.25" fill="#5C5C5C" stroke="#5C5C5C" stroke-width="0.5" />
                    <rect x="12.7502" y="29.2501" width="28.5" height="4.5" rx="2.25" transform="rotate(-90 12.7502 29.2501)" fill="#5C5C5C" stroke="#5C5C5C" stroke-width="0.5" />
                </svg>
            </div>
        </div>
    )
}

export default AddPostButton