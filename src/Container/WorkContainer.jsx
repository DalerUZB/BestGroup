import React from 'react'
import styled from 'styled-components'
import WorkColumn from '../Comonents/WorkColumn'

const WorkContainer = () => {

    const allProps = [
        {
            id: 1,
            title: "Backlog Tasks",
            count: 0,
        },
        {
            id: 2,
            title: "To Do Tasks",
            count: 0,
        },
        {
            id: 3,
            title: "In Process",
            count: 0,
        },
        {
            id: 4,
            title: "Done",
            count: 0,
        }


    ]


    return (
        <Wrapper>
            {allProps.map((item) => <WorkColumn item={item} />)}
        </Wrapper>
    )
}

export default WorkContainer
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    background: #F5F5F5;
    justify-content: space-between;
    padding: 50px;
    
    
`