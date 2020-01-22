<template>
  <div>
        <!-- <div>个人中心：</div>
            <div>当前用户：{{_authInfo.mobile}} <a href="javascript:;" @touchstart="handleToLogout">退出</a></div>
        <div>用户身份：普通会员</div> -->
        <div class="my-center">
            <div class="header">
                <img class="head-img" src="https://img.meituan.net/avatar/89a1058259fa892fa72b623986fc948a19807.jpg" alt="">
            </div>
            <div class="container">
                <div class="my-order">
                    <div class="order-p">我的订单</div>
                    <div class="mb-outline-b title-line"></div>
                    <div class="icon-menu">
                        <div class="menu movie">
                            <router-link tag="a" to="/Mine/orderList" >
                                 <p>电影</p>
                            </router-link>
                        </div>
                        <div class="menu mall">
                            <a href="#">
                                <p>商城</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="aaa">
                        <a class="coupon">优惠券</a>
                    </div>
                    <div class="aaa">
                        <a class="card">折扣卡</a>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex'
import axios from 'axios';
export default {
    name : 'center',
    computed : {
        ...mapGetters('user',['_authInfo']),
    },
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions('user', ['_UpdateInfo', '_Logout']),
        handleToLogout(){
            axios.delete('/member/logout').then((res) => {
            if (res.data.code == 200) {
                this._Logout().then(() => {
                    this.$dialog.alert({
                        message: '退出成功'
                    });
                    this.$router.push('/mine/login')
                })
            }
            }).catch(error => {
                this.$dialog.alert({
                    message: error
                });
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-center{
        font-size: 14px;
        background-color:#f3f3f3;
        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 150px;
            background: #f03d37;
            .head-img{
                border: 3px solid white;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }
        .container{
            height: 552px;
            .my-order{
                position: relative;
                margin-top: 15px;
                height: 149px;
                background: white;
                .order-p{
                    padding-top: 10px;
                    text-align: center;
                    font-size: 15px;         
                }
                // .title-line {
                //     position: absolute;
                //     top: 20px;
                //     left: 50%;
                //     margin-left: -80px;
                //     width: 160px;
                //     height: 1px;
                //     background: url('../../assets/dot.png') 0 bottom repeat-x;
                // }
                .icon-menu{
                    padding: 20px;
                    display: flex;
                    justify-content:space-around;
                    width: 80%;
                    margin: 0 auto;
                    margin-top: 5px;
                    .menu{
                        text-align: center;
                        width: 50%;
                        height: 90px;
                        p{
                            position: relative;
                            top: 53px;
                            text-align: center;
                            font-size: 15px;
                            line-height: 21px;
                            height: 21px;
                            margin: 0;
                            color: #333;
                        }
                    };
                    .movie{
                        background: url('../../assets/movie.png');
                        background-repeat: no-repeat;
                        background-position: top;
                        background-position-x: center;
                        background-position-y: top;
                        background-size: 42px auto;
                    };
                    .mall{
                        background: url('../../assets/mall.png');
                        background-repeat: no-repeat;
                        background-position: top;
                        background-position-x: center;
                        background-position-y: top;
                        background-size: 42px auto;
                    }
                    
                }
            }

            .item{
                background: white;
                margin-top: 10px;
                height: 100px;
                .coupon{
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    border-bottom: 1px solid #ccc;
                }
                .card{
                    display: block;
                    line-height: 50px;
                    height: 50px;
                }
                .aaa{
                    position: relative;
                    margin-left: 10px;
                }
                .aaa:after {
                    position: absolute;
                    right: 15px;
                    top: 18px;
                    display: inline-block;
                    content: "";
                    width: 8px;
                    height: 8px;
                    border-left: 1px solid #ccc;
                    border-top: 1px solid #ccc;
                    -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
                }
            }
        }
    }
    
</style>