<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in ciList" :key="item.id">
                <div>
                <span>{{ item.nm }}</span>
                <span class="q"><span class="price">{{ item.sellPrice }}</span> 元起</span>
                </div>
                <div class="address">
                <span>{{ item.addr }}</span>
                <span>{{ item.distance }}</span>
                </div>
                <div class="card">
                    <div v-for="(num,key) in item.tag" :key="num" v-if="num == 1" :class="key | classCard">{{key | formatCard}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "CiList",
    data() {
        return {
            ciList : []
        }
    },

    mounted() {
      this.$get("/apc/ajax/cinemaList?day=2020-01-22&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1579683637162&cityId=44&optimus_uuid=&optimus_risk_level=71&optimus_code=10").then(res => {
        if (res.cinemas) {
          this.ciList = res.cinemas
        }
      })
    },

    filters : {
        formatCard(key) {
            var card = [
                {key: "allowRefund",value: "允许退款"},
                {key: "endorse", value: "改签"},
                {key:"sell",value:"折扣卡"},
				{key:"snack",value:"小吃"}
            ];
            for (let index = 0; index < card.length; index++) {
                if (card[index].key == key) {
                    return card[index].value
                }                
            }
            return ''
        },

        classCard(key) {
            var card = [
                {key: "allowRefund",value: "bl"},
                {key: "endorse", value: "bl"},
                {key:"sell",value:"or"},
				{key:"snack",value:"or"}
            ];
            for (let index = 0; index < card.length; index++) {
                if (card[index].key == key) {
                    return card[index].value
                }                
            }
            return ''
        },

    }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>