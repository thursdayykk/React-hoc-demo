import React, { Component } from 'react'
import types from "../../utils/commonTypes" 
import PropTypes from "prop-types"
import withDataGroup from "../hoc/withDataList"
class Radio extends Component{
    static propTypes = {
        name:PropTypes.string.isRequired,
        info:types.singleData.isRequired,
        onChange:PropTypes.func,
        value:PropTypes.string
    }
    handleChange = e =>{
        let value = e.target.value
      
        this.props.onChange && this.props.onChange(value)
    }
    render(){

        return   (<label>
                    <input 
                        type="radio" 
                        name={this.props.name}
                        value={this.props.info.value}
                        checked={this.props.value === this.props.info.value}
                        onChange={this.handleChange}
                    />
                    {this.props.info.text}
            </label>)
    }
}
export default withDataGroup(Radio)
// export default class index extends Component {
//     handleChange = e =>{
//         let value = e.target.value
      
//         this.props.onChange && this.props.onChange(value)
//     }
//     /**
//      * 得到一组单选框
//      */
//     getCheckBoxes(){
//        return this.props.datas.map(it =>(
//             <label key={it.value}>
//                 <input 
//                 type="radio" 
//                 name={this.props.name}
//                 value={it.value}
//                 checked={this.props.value === it.value}
//                 onChange={this.handleChange}
//                 />
//                 {it.text}
//             </label>
            
//         ))
//     }
//     render() {
//         const bs = this.getCheckBoxes()
//         return (
//             <div>
//                 {bs}
//             </div>
//         )
//     }
// }
