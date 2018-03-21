Vue.component('order-list', {
	template: `<div class="weui-tab__bd">
    <div class="weui-tab__bd-item weui-tab__bd-item--active">
      <div class="weui-panel weui-panel_access" v-for="item in orderList">
		  <div class="weui-panel__hd">{{item.title}} <span class="fr status_alive" v-html="item.status"></span></div>
		  <div class="weui-panel__bd">
		    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
		      <div class="weui-media-box__hd">
		        <img class="weui-media-box__thumb" src="https://finance.gucheng.com/UploadFiles_7830/201412/2014120815055793.jpg">
		      </div>
		      <div class="weui-media-box__bd clearfix" style="position: relative;">
		        <h4 class="weui-media-box__title"><span>{{item.name}}</span><span class="price">￥{{item.price}}</span></h4>
		        <span class="createDate">{{item.createDate}}</span>
		        <div class="weui-media-box__desc fr" style="margin-top: 20px" v-if="item.status === '待支付'">
					<span class="smallBtn cancle">取消</span>&emsp;<span class="smallBtn pay">支付</span>
		        </div>
		        <div class="weui-media-box__desc fr" v-else style="margin-top: 10px;">等待商家退款</div>
		      </div>
		    </a>
		  </div>
		</div>
    </div>
  </div>`,
  props: {
  	orderList: {
  		type:Array,
  		default: []
  	}
  },
  data() {
  	return {
  		title: '嘎嘎'
  	}
  }
})