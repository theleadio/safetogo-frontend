<template>
    <div class="content-wrapper" v-if="show">
        <div class="card" v-for="newsItem in news" :key="newsItem.title">
            <div class="row">
                <div class="col-7 card-content">
                    <div class="row">
                        <div class="title">
                            {{newsItem.title}}
                        </div>
                    </div>
                    <div class="row card-detail">
                        Created by {{newsItem.createdBy}} @ {{newsItem.createdAt}}
                    </div>
                    <div class="row source">
                        <a :href="newsItem.source">source</a>
                        <div class="vote">
                            <a href="" class="up-vote">
                                {{newsItem.upVote}} <i class="far fa-thumbs-up"></i>
                            </a>
                            <a href="" class="down-vote">
                                {{newsItem.downVote}} <i class="far fa-thumbs-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-5 profile">
                    <img :src="newsItem.img_url" />
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
        news(){
            return this.$store.state.news.list
        },
        show(){
            return this.$store.state.news.show
        }
    },
    data: () => {
        return {
        }
    }
}
</script>
<style>
.content-wrapper{
    position: absolute;
    z-index:1000;
    width: 25%;
    height:100%;
    top:0;
    right:0;
    padding-top:1%;
    padding-left:2%;
    padding-right:2%;
    background-color: rgb(255,255,255,.5);
    overflow: scroll;
}
.card {
    background-color: #fff;
    margin-bottom:1%;
    padding-left: 5%;
    padding-right: 4%;
}
.card-content{
    padding:5%;
}
.card .title{
    font-size: 20px;
    font-weight: bold;
}

.card .source a{
    font-size: 14px;
    text-decoration: none;
    padding-top:1%;
}
.card .card-detail {
    font-size:10px;
}
.profile img{
    width:80px;
    padding-top: 10%;
    padding-bottom: 10%;
    border-radius: 50%;
    float:right;
}
.vote {
    margin-left: 5px;
}

.vote a{
    color:#9b9b9b;
    padding-top:1%;
    margin-left: 5px;
}


</style>