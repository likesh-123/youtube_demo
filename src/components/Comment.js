import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Comment() {
    const randomNames = [
        'Alice',
        'Bob',
        'Charlie',
        'David',
        'Eva',
        'Frank',
        'Grace',
        'Henry',
        'Ivy',
        'Jack'
      ];
    const [comments, setComments] = useState([
        
    ])
    const [commentInput, setCommentInput] = useState('')
    return (
        <div className="w-[400px] m-2 p-2">
            <div className='h-[400px]'>
                {
                    comments.map(({name, comment}, idx) => {
                        return <div className='flex m-2 p-2' key={idx}>
                            <p className='flex w-[100px]'>{name}: </p>
                            <p>{comment}</p>
                        </div>
                    })
                }
            </div>
            <div>
                <input type="text" id="first_name" 
                className="bg-gray-50 border border-gray-300 bg-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Comment"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        setComments([...comments,
                        {
                            name: randomNames[Math.floor(Math.random() * randomNames.length)],
                            comment: e.target.value
                        }])
                        setCommentInput('');
                    }
                }}/>
            </div>
        </div>
    )
}

export default Comment