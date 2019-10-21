import React, { Component } from 'react'
import type from "../../utils/commonTypes" 
import PropTypes from "prop-types"
import withDataGroup from "../hoc/withDataList"


 class CheckBox extends Component{
    static propTypes = {
        name:PropTypes.string,
        chooseDatas:type.chooseDatas.isRequired,
        info:type.singleData.isRequired,
        onChange:PropTypes.func
    }

    handleChange = (e)=>{
        let newArr
        if(e.target.checked){
            newArr = [...this.props.chooseDatas,e.target.value]
        }else{
            newArr = this.props.chooseDatas.filter(it => it!== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr)
    }
    render(){
        return (
            <label>
                <input 
                    type="checkbox" 
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.chooseDatas.includes(this.props.info.value)}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
        </label>
        )
        
    }
}
export default withDataGroup(CheckBox)



// // 一组多选框
// export default class CheckBoxGroup extends Component {
//     /**
//      * 默认属性
//      */
//     static defaultProps = {
//         datas:[],
//         chooseDatas:[],
//     }

//     /**
//      * 属性约束
//      */
//     static propTypes = {
//         datas:type.groupDatas.isRequired,
//         name:PropTypes.string.isRequired,
//         chooseDatas:type.chooseDatas,
//         onChange:PropTypes.func
//     }


//     handleChange = e =>{
//         let newArr
//         if(e.target.checked){
//             newArr = [...this.props.chooseDatas,e.target.value]
//         }else{
//             newArr = this.props.chooseDatas.filter(it => it!== e.target.value)
//         }
//         this.props.onChange && this.props.onChange(newArr)
//     }
//     /**
//      * 得到一组多选框
//      */
//     getCheckBoxes(){
//        return this.props.datas.map(it =>(
//             <label key={it.value}>
//                 <input 
//                 type="checkbox" 
//                 name={this.props.name}
//                 value={it.value}
//                 checked={this.props.chooseDatas.includes(it.value)}
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
