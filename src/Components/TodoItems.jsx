import  './CSS/TodoItems.css'
import tick from './Assets/updatebuy.png'
import not_tick from './Assets/cance.png'
import cross from './Assets/can.png'
const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
      <div className="todoitems-container">
        <img className='tick' src={tick} alt="" />
        <img className='not_tick' src={not_tick} alt="" />
      <div className="todoitems-text"></div>
      </div>
      <img  className='cross' src={cross} alt="" />
    </div>
  )
}

export default TodoItems
