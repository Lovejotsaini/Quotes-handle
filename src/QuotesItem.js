import React, { useState } from 'react'
import EditQuote from './EditQuote'

const QuotesItem = (props) => {
    const { name, body, id, removeItem ,editItem} = props
    const [toggle, setToggle] = useState(false)

    const handleRemove = () => {
        const confirmRemove = window.confirm("Are you sure")
        if (confirmRemove) {
            removeItem(id)
        }
    }

    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }
    return (
        <div>{toggle ? (
            <div>
                <EditQuote id={id} body={body} name={name}
                editItem={editItem}
                handleToggle={handleToggle}/>
                <button onClick={handleToggle}>cancel</button>
            </div>
        ) : (
            <div>
                <blockquote>{body}-{name}</blockquote>
                <button onClick={handleToggle}>edit</button>
                <button onClick={handleRemove}>remove</button>

            </div>
        )}

        </div>
    )
}
export default QuotesItem