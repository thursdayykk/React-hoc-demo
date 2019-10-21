import React, { Component } from 'react'
import CheckBoxGroup from "./index"
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
        chooseDatas:["football"],
      }
    render() {
        return (
            <div>
                {/* <CheckBoxGroup
                {...this.state}
                    onChange={newArr => {
                        this.setState({
                        chooseDatas:newArr
                        })
                    }}
                >
                </CheckBoxGroup> */}
                <CheckBoxGroup
                {...this.state}
                    onChange={newArr => {
                        this.setState({
                        chooseDatas:newArr
                        })
                    }}
                >
                </CheckBoxGroup>

            </div>
        )
    }
}
