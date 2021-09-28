import React from 'react'

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <h1>Task App</h1>
                <div>
                    <button>Add task</button>
                </div>
            </header>
            <hr />
            {children}
        </div>
    )
}

export default Layout
