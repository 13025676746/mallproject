import Scroll from "../../components/common/Scroll/Scroll";
import Swiper from "../../components/common/Swiper/Swiper";
import SwiperItem from "../../components/common/Swiper/SwiperItem";
import NavBar from "../../components/common/NavBar/NavBar";

export const ScrollMixin={
  components:{
    Scroll
  },
  data() {
    return {
      options: {
        height:'calc(100vh - 44px - 49px)',
        probeType:2,
        pullUpLoad:true,
        click:true
      }
    }
  },
  methods:{
    pullingUpListen(){
      this.$emit('requestMoreGoodsData')
    }
  }
}

export const SwiperMixin={
  components:{
    Swiper,
    SwiperItem
  },
  props: {
    swiperData: {
      type: Array,
      require:true
    }
  },
}

export const ControlTabMixin={
  data() {
    return {
      currentType:'pop'
    }
  },
  mounted() {
    //监听点击，显示不同的商品数据
    this.$bus.$on('controlTabItemClick',(index)=>{
      if (index===0){
        this.currentType='pop'
      }else if(index===1){
        this.currentType='new'
      }else {
        this.currentType='sell'
      }
      this.getSubcategotyDetailData && this.getSubcategotyDetailData()
    })
  },
}

