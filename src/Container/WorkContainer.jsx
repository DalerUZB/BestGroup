import React, { useState } from 'react'
import styled from 'styled-components'
import Tasks from '../Comonents/Tasks'
import WorkColumn from '../Comonents/WorkColumn'

const WorkContainer = () => {


    const [allTasks, setAllTasks] = useState([
        {
            id: 1,
            title: "Backlog Tasks",
            count: 0,
            items: [

            ]

        },
        {
            id: 2,
            title: "To Do Tasks",
            count: 0,
            items: [

            ]
        },
        {
            id: 3,
            title: "In Process",
            count: 0,
            items: [

            ]
        },
        {
            id: 4,
            title: "Done",
            count: 0,
            items: [

            ]
        }
    ])

    const addTask = (value) => {
        allTasks.map((item) => {
            if (item.id === value.taskId) {
                item.items.push(value.inputValue)
            }
        })

    }


    return (
        <TaskDiv>
            <WrapperBlog>
                {allTasks.map((task) => <WorkColumn
                    task={task}
                    canValue={(value) => addTask(value)} />)
                }
            </WrapperBlog>

            {allTasks.map((task) => (<Tasks tasks={task} />))}
        </TaskDiv>
    )
}

export default WorkContainer
const TaskDiv = styled.div`
border: 1px solid red;
`

const WrapperBlog = styled.div`
    display: flex;
    height: 100vh;
    background: #F5F5F5;
    justify-content: space-between;
    padding: 50px;
    
    
`

