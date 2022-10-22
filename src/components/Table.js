import moment from 'moment/moment'
import React from 'react'

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
        <span className="row-time">2:30 pm , 22 oct 2022</span>
        <span className="row-task">{capitalizeFirstLetter("my fife wefwe vrst task")}</span>
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
