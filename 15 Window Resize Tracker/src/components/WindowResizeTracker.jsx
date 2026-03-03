import React, { useEffect, useState } from 'react'

const WindowResizeTracker = () => {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {

        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }



        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])


    useEffect(() => {
        document.title = `Size:${size.width}x${size.height}`
    }, [size.width, size.height])

    return (
        <>
            <h1>Window Resize Tracker</h1>

            <h2>Width:{size.width}px</h2>
            <h2>Height:{size.height}px</h2>
        </>
    )
}

export default WindowResizeTracker