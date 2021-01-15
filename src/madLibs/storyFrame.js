import react from 'react'

const StoryFrame = ({story}) => {
    let madLib = `Hi, my name favorite toy is the ${story.noun}. Can you ${story.verb} with me at the ${story.adjective} tree? 
    I really want to show off my ${story.noun2}.`
    
    return (
        <div>
            <p>{madLib}</p>
        </div>
    )
}

export default StoryFrame;