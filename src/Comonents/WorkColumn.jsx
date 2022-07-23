import { useState } from 'react'
import styled from 'styled-components'
import Tasks from './Tasks'

const WorkColumn = ({ task, canValue }) => {
    const [btnTrue, setBtnTrue] = useState(false)
    const [savedValue, setSavedValue] = useState("")
    return (
        <WorkForColumn >
            <div className='title__div'>
                <h3>{task.title}</h3>
                <span>{task.count}</span>
            </div>




            {btnTrue ? (
                <div className='resultsInput'>
                    <input type="text" className='input' onKeyUp={({ target }) => setSavedValue(target.value)} />
                    <div className='btnsInfo'>
                        <button className='btnCancel' onClick={() => setBtnTrue(false)}>Cancel</button>
                        <button className='btnSave' onClick={() => canValue({
                            inputValue: savedValue,
                            taskId: task.id
                        })}>Save</button>
                    </div>

                </div>
            ) : (<div className='addBtn'>
                <button onClick={() => setBtnTrue(true)}>+</button>
            </div>)}





        </WorkForColumn >
    )
}
export default WorkColumn

const WorkForColumn = styled.div`
    display: flex;
    flex-direction: column;
    .title__div{
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
    }
    .addBtn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px;
        gap: 10px;
        width: 264px;
        height: 32px;
        background: #FFFFFF;
        border: 1px solid #F2F4F7;
        box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
        border-radius: 8px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .resultsInput{
        height: 107px;
        width: 263px;
        border-radius: 8px;
        padding: 20px;
            background: #FFFFFF;
            box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
            border-radius: 8px;
            flex: none;
            order: 0;
            flex-grow: 0;
            .input{
                height: 27px;
                /* width: 225px; */
                width: 100%;
                left: 20px;
                top: 20px;
                border-radius: 4px;
                display: block;
                margin-bottom: 12px;
            }
            .btnsInfo{
                display: flex;
                align-items: center;
                justify-content: space-between;
                

            }
            .btnCancel{
                height: 24px;
                width: 48%;
                left: 115px;
                top: 0px;
                border-radius: 5px;
                background: #F2A762;
                border-radius: 5px;
                border: none;
            }
            .btnSave{
                height: 24px;
                width: 48%;
                border: none;
                left: 0px;
                top: 0px;
                border-radius: 5px;
                background: #62B6F2;
                border-radius: 5px;


            }

    }

`