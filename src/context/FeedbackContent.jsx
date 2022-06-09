//update global state
import { createContext, useState } from 'react';


const FeedbackContent = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this item is from context',
            rating: 10
        }

    ])
    return <FeedbackContent.Provider value={{
        feedback

    }}>
        {children}
    </FeedbackContent.Provider>
}

export default FeedbackContent