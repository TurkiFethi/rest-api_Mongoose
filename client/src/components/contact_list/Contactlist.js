import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getcontacts,deletecontact}from '../../action/action'
import { Card } from 'antd'
import './contactlist.css'
import { Button } from 'antd';
import Add_Contact from '../add_contact/Add_Contact'

const { Meta } = Card;

 class Contactlist extends Component {
    componentDidMount(){
        this.props.getcontacts()
    }
    render() {
        
        return (
            <div className="container-cards">
              {this.props.contactList.map((el,i)=>(
                  <div className="container-card">
                    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <div className="container-tel">
    <span>Name:</span>
    <Meta title={el.name} />
    </div>
   
    <div className="container-tel">
    <span>Email:</span>
    <Meta description={el.email}/>
    </div>
    <div className="container-tel">
    <span>Tel:</span>
    <Meta description={el.tel}/>
    </div>



    <div className="container-btn">
    <Button onClick={()=>this.props.deletecontact(el._id)} type="primary" block>
      Delete
    </Button>
   <Add_Contact contacts={el}/>
    </div>
  
  </Card>,
                  </div>
              ))}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        contactList:state.contact
    }
}
export default connect(mapStateToProps,{getcontacts,deletecontact})(Contactlist)




