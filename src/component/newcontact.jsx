import React,{Component} from 'react'
import {Button,TextField} from '@material-ui/core'

class NewContact extends Component{
    constructor(){
        super()
        this.state={
            name :'',
            no:'',
            address :'',
            loading : true,
        }
        this.noHandler=this.noHandler.bind(this)
        this.nameHandler=this.nameHandler.bind(this)
        this.addressHandler=this.addressHandler.bind(this)
        this.submit=this.submit.bind(this)
    }

    submit(){
        
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                ...this.state,
                loading :false
            })
        },3000)
    }

    shouldComponentUpdate(){
        return true
    }

    nameHandler(e){
         this.setState({
             ...this.state,
             name : e.target.value
         })
    }

    addressHandler(e){
        this.setState({
            ...this.state,
            address:e.target.value
        })
    }

    noHandler(e){
        if(isNaN(e.target.value)){
            alert('Enter Valid no')
        }
        else{
            this.setState({
                ...this.state,
                no :e.target.value
            })
        }
    }

    render(){
        return(
            <>
               {
                   this.state.loading?
                      <h1 style={{textAlign:'center',marginTop:'40px'}}>Loading...</h1>:
                      <div className='field'> 
                           <TextField style={{marginTop:'15px'}} variant='outlined' size='small'
                            label='Enter Name' value={this.state.name} onChange={this.nameHandler}/>
                             <TextField style={{marginTop:'15px'}} variant='outlined' size='small'
                            label='Enter no' value={this.state.no} onChange={this.noHandler} type={'number'}/>
                            <TextField style={{marginTop:'15px'}} variant='outlined' size='small'
                            label="Enter Address" value={this.state.address} onChange={this.addressHandler}/>
                            <Button color='primary' variant='contained'>Save</Button>
                           <Button color='primary' variant='contained'>Cancell</Button>
                       </div>
               }
            </>
        )
    }
}

export default NewContact