import React from 'react'
import './custom.css'

function HelloWorld({name, profession}) {
    return <h1 className="hello-world">Hello, my name is <strong>{name}</strong> and I'm <strong>{profession}</strong></h1>
}

export default HelloWorld;