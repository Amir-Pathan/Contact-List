import React,{PureComponent} from 'react'
import {IconContext} from 'react-icons'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineSortAscending,AiOutlineSortDescending,AiFillPlusCircle} from 'react-icons/ai'
import {BiGroup} from 'react-icons/bi'
import {Add} from '../redux'
import {connect} from 'react-redux'
import {AppBar,Toolbar} from '@material-ui/core'
import {Link} from 'react-router-dom'

class Header extends PureComponent{

    constructor(){
        super()
        this.state={
            az : true
        }
    }

    componentDidMount(){
        this.props.add()
    }

    render(){
        return(
            <AppBar color='inherit'>
                <Toolbar className='header'> 
                  <div>
                    <h3>Contact-List</h3>
                  </div>
                  <div className='icons'>
                    <IconContext.Provider value={{size:30}}>
                        <FaSearch cursor={'pointer'}/>
                        {
                            this.state.az?
                               <AiOutlineSortAscending cursor={'pointer'}/>
                            :
                               <AiOutlineSortDescending cursor={'pointer'}/>
                        }
                        <BiGroup cursor={'pointer'}/>
                        <Link to={{
                            pathname:'/newContact'
                        }}> 
                            <AiFillPlusCircle cursor={'pointer'}/>
                        </Link>
                    </IconContext.Provider>
                </div>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data : state
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        add : ()=>dispatch(Add())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)