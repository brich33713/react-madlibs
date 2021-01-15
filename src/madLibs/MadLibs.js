import react, { useRef, useState } from 'react'
import StoryFrame from './storyFrame'

const MadLibs = () => {
    const [input,changeInput] = useState("")
    const [responses,updateResponses] = useState([])
    const [formView,changeView] = useState(false)
    function handleClick(e){
        e.preventDefault()
        if(!formView){
        updateResponses([])
            for(let child of e.target.form){
                const {name,value} = child
                if(name !== ""){
                    if(value === ""){
                        return
                    }
                    updateResponses(responses => ({
                        ...responses,
                        [name]:value
                    }))
                }   
            }
        }
        changeView(!formView);
    }
    

    function handleChange(e){
        const {name,value} = e.target;
        changeInput(value)
    }

    return(
        <div>
            <h1>MadLibs!</h1>
            {!formView && <form hidden={formView}>
                {/* Feature coming later for importing stories */}
                {/* {story.map(field => <div><input onChange={handleChange} type="text" placeholder={field} name={field}/></div>)} */}
                <div><input onChange={handleChange} type="text" placeholder="noun" name="noun" /></div>
                <div><input onChange={handleChange} type="text" placeholder="verb" name="verb" /></div>
                <div><input onChange={handleChange} type="text" placeholder="noun2" name="noun2" /></div>
                <div><input onChange={handleChange} type="text" placeholder="adjective" name="adjective" /></div>
                <button onClick={handleClick}>Get Story</button>
            </form>
            }
            
            {formView && (
            <div>
                <StoryFrame story={responses}/>
                <button onClick={handleClick}>Restart</button>
            </div>)}
        </div>
    )
}

export default MadLibs;