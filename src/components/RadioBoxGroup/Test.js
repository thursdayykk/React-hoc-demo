import React, { Component } from 'react'
import RadioBoxGroup from "./index"

export default class Test extends Component {
    state = {
        datas: [
          { value:"football",text: "足球"},
          { value:"basketball",text: "篮球"},
          { value:"vellball",text: "排球"},
          { value:"pingpang",text: "乒乓球"},
          { value:"movie",text: "电影"},
          { value:"guitar",text: "吉他"}
        ],
        name:"hobbit",
        value:"football"
      }
    render() {
        return (
            <div>
                <RadioBoxGroup 
                    datas={this.state.datas}
                    name="loves"
                    value={this.state.value}
                    onChange={value => {
                        this.setState({
                        value:value
                        })
                    }}
                />
            </div>
        )
    }
}
