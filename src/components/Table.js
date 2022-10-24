import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment/moment'

export default function MainTable() {

    function capitalizeFirstLetter(str){
        return str.slice(0,1).toUpperCase() + str.slice(1)
    }

  return (
    <div className="table">
    <div className="header">
    {moment().format("DD MMMM, dddd")}
    </div>
    <div className='rows'>
    <div className="row">
        <span className="row-time">2:30 pm , 22 oct 2022</span>
        <span className="row-task">{capitalizeFirstLetter("my firfewwwwwwwwwwwwf wfw wvefef wfewfew wefwf wvfw fwew  est task")}</span>
    </div>
    <div className="row">
        <div className='content'>
        <p className="row-time">2:30 pm , 22 oct 2022</p>
        <p className="row-task">{capitalizeFirstLetter("my fife wefwe vrst task")}</p>
        </div>
        <div className='actions'>
        <FontAwesomeIcon icon={faEdit} style={{cursor:"pointer"}}/>
        <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} />
        </div>
    </div>
    <div className="row">
        <span className="row-time">2:30 pm , 22 oct 2022</span>
        <span className="row-task">{capitalizeFirstLetter("my first task")}</span>
    </div>
    </div>
    <div className="footer">
    Add Task
    </div>
    </div>
  )
}
