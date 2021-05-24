export default {
  initCartList(state,initData){
    state.cartList=initData
  },
  addGoods(state,goods){
    state.cartList.push(goods)
    console.log(goods)
  },
  addGoodsNumber(state,iid){
    state.cartList.forEach(item=>{
      if(item.iid === iid) return item.number++
    })
  },
  deleteItem(state,index){
    state.cartList.splice(index,1)
  },
  changeSelect(state,index){
    state.cartList[index].isSelect=!state.cartList[index].isSelect
  },
  changeSelectAll(state,flag){
    if(flag){
      state.cartList.forEach(item=>{
        if(item.isSelect) item.isSelect=false
      })
    }else {
      state.cartList.forEach(item=>{
        if(!item.isSelect) item.isSelect=true
      })
    }
  }
}