<template>
	<view>
		<!-- top -->
		<!-- 	<view class="view-t"
			style="justify-content: space-between;position: fixed;width: 100%;left: 0;top: 0;z-index: 1000;">
			<view class="view-2" style="display: flex;">
				<view style="padding: 32px 0px 0px 20px">
					<image src="../../static/detailimg/top-1.png" class="img-top"></image>
				</view>
				<view style="padding: 30px 0px 0px 20px">
					<text style="color: #fff;font-family:LiSu;">请假</text>
				</view>
			</view>
			<view class="view-2" style="">
				<view style="padding: 30px 15px 0px 20px">
					<image src="../../static/detailimg/top-2.png" class="img-top"></image>
				</view>
			</view>
		</view> -->
		<!-- main -->
		<view class="">
			<view class="">
				<view class="" style="padding-top: 10px;">
					<view class="line"></view>
				</view>
				<view class="" style="padding: 14px 0px 14px 18px;">
					基础信息
				</view>
				<view class="" style="" style="width: 95%;float: right;">
					<view class="line"></view>
				</view>
				<!-- 第一部分 -->
				<view class="" style="width: 100%;display: flex;">
					<view class="first-1">
						<div class="flex">
							<text class="item-1">学号</text>
							<input type="text" value="220301100234" />
						</div>
						<div class="flex">
							<text class="item-1">姓名</text>
							<input class="item-2" type="text" value="刘一程" />
						</div>
						<div class="flex">
							<text class="item-1">性别</text>
							<input class="item-2" type="text" value="男" />
						</div>
						<div class="flex">
							<text class="item-1">电话</text>
							<input class="item-2" type="text" value="18452555712" />
						</div>
						<div class="flex">
							<text class="item-1">学院</text>
							<input class="item-2" type="text" value="计算机与软件学院" />
						</div>
						<div class="flex">
							<text class="item-1">班级</text>
							<input class="item-2" type="text" value="2246" />
						</div>
						<div class="flex">
							<text class="item-1">现在年级</text>
							<input class="item-2" type="text" value="2022" />
						</div>
						<div class="flex">
							<text class="item-1">班主任姓名</text>
							<input class="item-2" type="text" value="曹小燕" />
						</div>
						<div class="flex">
							<text class="item-1">班主任电话</text>
							<input class="item-2" type="text" value="13814067926" />
						</div>
						<div class="flex">
							<text class="item-1" >住宿地址</text>
							<input style="min-width:60%;" class="item-2" type="text" value="仙林校区雪松苑1栋412室2号床" />
						</div>
					</view>
				</view>

				<view class="line"></view>

				<view class="" style="width: 100%;display: flex;">
					<view class="first-4">
						<text class="item-1">请假类型</text>
						<text class="item-1" style="margin:10px 0px 16px 0px">请假日期</text>
						<text class="item-1">请假天数</text>
						<text class="item-1">是否校内住宿</text>
						<text class="item-1">请假事由</text>
						<text class="item-1">证明材料</text>
						<!-- <image src="../../static/detailimg/top-5.jpg" class="img-t"></image> -->

						<!-- <image src="../../../static/tempimg/3-1.jpg" class="img-t"></image> -->


						<text class="item-1">手机号</text>
						<text class="item-1">是否占用上课时间</text>
						<text class="item-1">任课老师</text>
						<text class="item-1">是否出校</text>
						<text class="item-1">出校去向（省市县）</text>
						<text class="item-1">出校具体地址</text>
						<text class="item-1">拟返校时间</text>
						<text class="item-1">申请时间</text>
					</view>
					<view class="first-3" style="width: 210px;">
						<text class="item-2">事假（不离宁,占课）</text>
						<input type="text" v-model="start" />
						<input type="text" v-model="end" />
						<text class="item-6">1</text>
						<text class="item-6">是</text>
						<text class="item-6">去医院</text>
						<text class="item-2"></text>
						<input class="item-2" style="margin-top: 20px;" type="text" value="13485099125" />
						<text class="item-2">否</text>
						<text class="item-2" style="padding-top: 22px;">无</text>
						<text class="item-2">是</text>
						<input class="item-2" style="padding-top: 8px;" type="text" value="江苏省/南京市/栖霞区" />
						<input class="item-7" type="text" style="padding-top: 14px;" value="仙林康泰鼓楼医院" />
						<input class="item-7" v-model="end" style="padding-top: 5px;" type="text" value="" />
						<input class="item-7" style="padding-top: 6px;" v-model="shenqing" type="text" value="" />
					</view>
				</view>

				<view class="line" style="margin-top: 0px;"></view>
				<view class="line" style="margin:20px 0px 20px 0px"></view>

				<view class="" style="padding: 14px 0px 14px 18px;">
					审核流程
				</view>
				<view class="line" style="margin:0px 0px 20px 1px"></view>


				<view class="" style="width: 100%;display: flex;">
					<view class="" style="width: 130px;">
						<view class="item-3" style="float: right;margin: 0px 12px 0px 0px;">
							{{shenqing}}
						</view>
						<view class="item-3" style="float: right;margin: 50px 12px 0px 0px;">
							{{shenqing}}
						</view>
						<view class="item-3" style="float: right;margin: 0px 12px 0px 0px;">
							8:32:21
						</view>
					</view>
					<view class="" style="width: 30px;">
						<image src="../../static/detailimg/top-6.png" style="width: 25px; height: 25px;"></image>
						<view class="line-h1"></view>
						<image src="../../static/detailimg/top-6.png" style="width: 25px; height: 25px;"></image>
						<view class="line-h"></view>
						<image src="../../static/detailimg/top-6.png" style="width: 25px; height: 25px;"></image>
					</view>
					<view class="">
						<view class="item-4" style="margin: 0px 0px 0px 12px;">
							提交申请
						</view>
						<view class="item-4" style="margin:44px 0px 0px 12px;">
							班主任审核
						</view>
						<view class="item-4" style="margin: 0px 0px 0px 12px;">
							<text style="font-size: 14px;">通过</text><br>
							<input style="display: inline; font-size: 14px;" type="text" value="审核人：葛新艳" /><br>
							<text>审核意见：审核通过</text>
						</view>
						<view class="item-4" style="margin:44px 0px 0px 12px;">
							学院辅导员审核
						</view>
						<view class="item-4" style="margin: 0px 0px 0px 12px;">
							<text style="font-size: 14px;">通过</text><br>
							<input style="display: inline; font-size: 14px;" type="text" value="审核人：蔡伟" /><br>
							<text>审核意见：审核通过</text>
						</view>
						<view class="item-4" style="margin:44px 0px 0px 12px;">
							学院审核
						</view>
						<view class="item-4" style="margin: 0px 0px 0px 12px;">
							<text style="font-size: 14px;">通过</text><br>
							<input style="display: inline; font-size: 14px;" type="text" value="审核人：张振峰" /><br>
							<text>审核意见：审核通过</text>
						</view>

						<view class="item-4" style="margin: 18px 0px 0px 12px;">
							结束
						</view>
					</view>
				</view>
			</view>
		</view>


		<!-- <view class="">
			<image src="../../static/detailimg/top-7.png"
				style="height: 100px;width: 300px;margin: 30px 30px 0px 50px;"></image>
		</view> -->

		<view class="" style="margin-bottom: 40px;">
			<view class="" style="margin-left: 6%;margin-top: 40px;">
				<view class=""
					style="width: 86%;height: 25px;background-color: #fff;text-align: center; padding: 10px;border-radius: 8px;">
					<text>定位销假</text>
				</view>
			</view>
			<view class="" style="margin-left: 6%;margin-top: 10px;">
				<view class=""
					style="width: 86%;height: 25px;background-color: #86c2c7;text-align: center; padding: 10px;border-radius: 8px;">
					<text>打印</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				start: "",
				end: "",
				shenqing: ''
			}
		},
		onLoad() {
			this.format()
		},
		methods: {
			format() {
				var date = new Date();
				var year = date.getFullYear()
				var month = date.getMonth() + 1
				var day = date.getDate()
				this.start = year.toString() + "-" + month.toString() + "-" + day.toString() + " 9:30 至" + year
					.toString() + "-" + month.toString() + "-" + day.toString();
				this.end = " 20:30 ";
				this.shenqing = year.toString() + "-" + month.toString() + "-" + day.toString() + " 8:30"
			}
		}
	}
</script>

<style>
	.img-t {
		width: 100px;
		height: 100px;
		margin-bottom: 10px;
	}

	.first-1 {
		/* width: */
		display: flex;
		flex-direction: column;
		padding: 14px 0px 10px 18px;
		/* background-color: #4CD964; */
	}

	.flex {
		display: flex;
		justify-content: space-between;
		/* width: 300px; */
	}


	.first-4 {
		width: 100px;
		display: flex;
		flex-direction: column;
		padding: 8px 0px 10px 18px;
		/* background-color: #2739d9; */
	}

	.first-3 {
		width: 100px;
		display: flex;
		flex-direction: column;
		padding: 8px 0px 10px 2px;
		/* background-color: #d9347b; */
	}

	.first-2 {
		width: 200px;
		display: flex;
		flex-direction: column;
		padding: 14px 0px 10px 0px;
		/* background-color: #4CD964; */
	}

	.item-1 {
		margin-bottom: 6px;
		color: #92969C;
	}

	.item-2 {
		margin-bottom: 6px;
		margin-left: 20px;
		color: #000000;
	}

	.item-3 {
		font-size: 14px;
		color: #92969C;
	}

	.item-4 {
		font-size: 18px;
		color: #92969C;
	}

	.item-6 {
		margin-bottom: 8px;
		line-height: 22px;
		color: #000000;
	}

	.item-7 {

		margin-bottom: 0px;
		line-height: 22px;
		color: #000000;
	}


	.img-top {
		width: 20px;
		height: 20px;
	}

	.view-t {
		height: 66px;
		width: 100%;
		background-color: #3975C6;
		display: flex;
	}

	.view-2 {
		height: 60px;
		/* background-color: #4CD964; */
	}

	.line {
		float: right;
		width: 100%;
		background-color: #000;
		height: 1px;
		transform: scaleY(0.07);
		transform-origin: 50%100%;
	}


	.line-h1 {
		height: 45px;
		background-color: #000;
		width: 1px;
		transform: scalex(0.05);
		transform-origin: 50%100%;
		margin: -6px 0px 0px 11px;
	}

	.line-h {
		height: 90px;
		background-color: #000;
		width: 1px;
		transform: scalex(0.05);
		transform-origin: 50%100%;
		margin: -6px 0px 0px 11px;
	}
</style>
