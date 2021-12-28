import React,{PureComponent} from 'react'
import {IconContext} from 'react-icons'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineSortAscending,AiOutlineSortDescending,AiFillPlusCircle} from 'react-icons/ai'
import {BiGroup} from 'react-icons/bi'

class Header extends PureComponent{

    constructor(){
        super()
        this.state={
            az : true
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h3>Contact-List </h3>
                </div>
                <div>
                    <IconContext.Provider value={{size:30}}>
                        <FaSearch/>
                        {
                            this.state.az?
                               <AiOutlineSortAscending/>
                            :
                               <AiOutlineSortDescending/>
                        }
                        <BiGroup/>
                        <AiFillPlusCircle/>
                    </IconContext.Provider>
                </div>
            </div>
        )
    }
}

export default Header