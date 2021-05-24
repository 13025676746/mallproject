export default {
  isSelectAll(state) {
    let flag = true
    state.cartList.forEach(item => {
      if (!item.isSelect) flag = false
    })
    return flag
  },
  totalSum(state) {
    return state.cartList.reduce((preValue, item) => {
      if (item.isSelect) return preValue += item.price * item.number
      return preValue
    }, 0)
  },
  cateListLength(state){
    return state.cartList.length
  },
  selectLength(state){
    return state.cartList.filter(item=>{
      return item.isSelect==true
    }).length
  }
}