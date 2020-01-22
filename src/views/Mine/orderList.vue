<template>
  <div>
      <div class="order-list">
          <div class="order-item">
              <div class="order-title mb-line-b">
                  <div class="cinema-name">中瑞国际影城</div>
              </div>
              <div class="order-info">
                  <img src="https://img.meituan.net/maoyaneticketimage/58ee777f37a54529f4100d9a8292038c332191.jpg@750w_750h_2e" alt="">
                  <div class="order-desc">
                    <p clsss="desc-name">1中酷薯+2杯碳酸(以影院实物为准)</p>
                    <p class="desc-number">数量：1</p>
                  </div>
              </div>
              <div class="order-more">
                  <div class="total-price">
                      总价：188元
                  </div>
              </div>
          </div>

          <div class="order-item">
              <div class="order-title mb-line-b">
                  <div class="cinema-name">星美国际影商城(王庄店)</div>
              </div>
              <div class="order-info">
                  <img src="https://img.meituan.net/maoyaneticketimage/58ee777f37a54529f4100d9a8292038c332191.jpg@750w_750h_2e" alt="">
                  <div class="order-desc">
                    <p clsss="desc-name">爱情公寓 2张</p>
                    <div class="show-time">2018-08-10 周五 19:40123123111111111111111111111111111111111111111</div>
                    <div class="position">
                        4号厅
                        <span>5排15座</span>
                        <span>5排16座</span>
                    </div>
                  </div>
              </div>
              <div class="order-more">
                  <div class="total-price">
                      总价：188元
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'orderList'
}
</script>

<style lang="scss" scoped>
    .order-list{
        background: #f3f3f3;
        .order-item{
            margin-top: 15px;
            height: 161px;
            background: white;
            .order-title{
                display: flex;
                justify-content: center;
                border-bottom: 1px solid #ccc;
                height: 38px;
                .cinema-name{
                    width: 90%;
                    font-size: 14px;
                    line-height: 38px;
                }
            };
            .order-info{
                display: flex;
                margin: 12px 15px;
                img{
                    width: 57px;
                    height: 57px;
                }
                .order-desc{
                    flex: 1;
                    overflow: hidden;
                    margin-left: 10px;
                    .desc-name{
                        height: 21px;
                        line-height: 21px;
                    };
                    .desc-number{
                        margin-top: 10px;
                        height: 18px;
                        line-height: 18px;
                        color: #888;
                        font-size: 12px;

                    };
                    .show-time{
                        margin-top: 5px;
                        font-size: 12px;
                        color: #888;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        // word-break: break-all;
                        white-space: nowrap;
                    };
                    .position{
                        margin-top: 5px;
                        font-size: 12px;
                        color: #888;
                        overflow: hidden;
                                                text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }

            .order-more{
                margin-left: 20px;
                border-top: 1px solid #ccc;
                height: 42px;
                padding-top:10px;
                .total-price{
                    font-size: 12px;
                    color: #888;
                }
            }
        }
    }
</style>
