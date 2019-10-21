import React, { Component } from 'react'
import types from "../../utils/commonTypes" 
import PropTypes from "prop-types"
import withDataGroup from "../hoc/withDataList"

class Option extends Component{
    static propTypes = {
        info:types.singleData.isRequired,
    }

    handleChange = e =>{
        let value = e.target.value
      
        this.props.onChange && this.props.onChange(value)
    }
    
    render(){

        return   (<option value={this.props.info.value}>
                            {this.props.info.text}
                </option>)
    }

}

const OptGroup = withDataGroup(Option)

class Select extends Component{

    static propTypes  = {
        name:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired,
        onChange:PropTypes.func
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value)
    }

    render(){
        return   (<select name={this.props.name}
            value={this.props.value}
        onChange = {this.handleChange}
        >
            <OptGroup {...this.props}/>
        </select>)
    }
}

export default Select



// export default class Select extends Component {
//     handleChange = e =>{
//         let value = e.target.value
//         this.props.onChange && this.props.onChange(value)
//     }
//     /**
//      * options
//      */
//     getOptions(){
//        return this.props.datas.map(it =>(
//            <option value={it.value} key={it.value}>
//                {it.text}
//            </option>
            
//         ))
//     }
//     render() {
//         const bs = this.getOptions()
//         return (
//             <div>
//                 <select name={this.props.name} 
//                     value={this.props.value}
//                     onChange={this.handleChange}
//                 >
//                     {bs}
//                 </select>
//             </div>
//         )
//     }
// }
