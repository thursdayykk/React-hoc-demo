import PropType from "prop-types"

export default {
    children:PropType.node,
    groupDatas:PropType.arrayOf(PropType.shape({
        value:PropType.string.isRequired,
        text:PropType.string.isRequired
    })),//多选款、单选框、下拉列表的数据源
    chooseDatas:PropType.arrayOf(PropType.string),
    singleData:PropType.shape({
        value:PropType.string.isRequired,
        text:PropType.string.isRequired
    })
}