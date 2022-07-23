import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Tasks = ({ tasks }) => {
    const [post, setPost] = useState([])
    useEffect(() => {
        tasks.items.map((items) => setPost(items))
    }, [])
    return (
        < WrapperTask >
            <p>{post}</p>
        </WrapperTask>
    )
}

export default Tasks

const WrapperTask = styled.div`
        height: 112px;
        width: 263px;
        left: 0px;
        top: 0px;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 12px;
        width: 263px;
        height: 112px;
        background: #FFFFFF;
        box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
        border-radius: 8px;
        flex: none;
        order: 0;
        flex-grow: 0;
    p{
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    }

`