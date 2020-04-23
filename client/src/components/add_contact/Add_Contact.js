import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import './add_contact.css'
import { connect } from 'react-redux';
import {addcontact,editcontact}from "../../action/action"

class Add_Contact extends Component {
    state = { 
        visible: false,
        name:this.props.contacts?this.props.contacts.name:"",
        email:this.props.contacts?this.props.contacts.email:"",
        tel:this.props.contacts?this.props.contacts.tel:""
    
    };

    handleChage=(event)=>{
        this.setState({
           [event.target.name]:event.target.value
        })
    }
    initState=()=>{
        this.setState({
            name:"",
            email:"",
            tel:""
        })
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    addEditContact=()=>{
        this.props.contacts?
        this.props.editcontact(this.props.contacts._id,{
            name:this.state.name,
            email:this.state.email,
            tel:this.state.tel
        }):
        this.props.addcontact(this.state);
        this.verifyChamps()
    }


    verifyChamps=()=>{
      this.state.name.length===0 && alert('name is empty')

    }





    render() {
        return (
            <div>
                  <Button type="primary" onClick={this.showModal}>
                     
                  {this.props.contacts?"Edit":"Add New Contact"}
        </Button>
        <Modal
          title="New Contact"
          visible={this.state.visible}
          onOk={()=>{this.addEditContact();this.handleOk();this.initState()}}
          onCancel={this.handleCancel}
        >
            <div className="container-input">
          <input className="input" placeholder="add name" type="text"  name="name" value={this.state.name} onChange={this.handleChage} />
          <input className="input" placeholder="add email" type="text" name="email" value={this.state.email} onChange={this.handleChage}/>
          <input className="input" placeholder="add tel" type="text"   name="tel" value={this.state.tel} onChange={this.handleChage}/>
          </div>
        </Modal>
            </div>
        )
    }
}


export default connect(null,{addcontact,editcontact})(Add_Contact)


