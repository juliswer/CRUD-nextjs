import React from 'react'

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <h1>Task App</h1>
                <div>
                    <button>Agregar Tarea</button>
                </div>
            </header>
            {children}
        </div>
    )
}

export default Layout
