<template>
    <div class="content-wrapper" v-if="show">
        <i class="fas fa-times" v-on:click="hide"></i>
        <div class="card" v-for="newsItem in news" :key="newsItem.title">
            <div class="row">
                <div class="col-12 col-md-12 col-xl-7 card-content">
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
                <div class="col-12 col-md-12 col-xl-5 profile">
                    <img :src="newsItem.img_url" />
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

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
    },
    methods:{
        hide: function(event){
            this.$store.commit('news/hideNews');
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
    margin-top:10%;
    margin-bottom:1%;
    padding-left: 5%;
    padding-right: 5%;
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
.fa-times{
    color: #9b9b9b;
    float:right;
    cursor: pointer;
}

.fa-times:hover{
    color: #000;
}

@media screen and (min-width:1440px) {
    .content-wrapper{
        width:20%;
    }
    .card{
        padding-left:12%;
    }

    .card .title{
        font-size: 14px;
        font-weight: bold;
    }

    .card .source a{
        font-size: 10px;
        padding-top:5%;
    }
    .card .card-detail {
        font-size: 8px;
    }
    .profile img{
        width: 60px;
        padding-top: 20%;
    }
    .vote {
        margin-left: 5px;
    }

    .vote a{
        color:#9b9b9b;
        padding-top: none;
        margin-left: 5px;
    }
}
@media screen and (max-width:1024px) {
    .content-wrapper{
        width: 30%;
    }
    .card{
        padding-left: 12%;
        padding-right: 12%;
    }

    .card .title{
        font-size: 14px;
        font-weight: bold;
    }

    .card .source a{
        font-size: 10px;
        padding-top:5%;
    }
    .card .card-detail {
        font-size: 8px;
    }
    .profile img{
        width: 60px;
        padding-top: 10%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        float:none;
    }
    .vote {
        margin-left: 5px;
    }

    .vote a{
        color:#9b9b9b;
        padding-top: none;
        margin-left: 5px;
    }
}
@media screen and (max-width: 375px) {
    .content-wrapper{
        width:100%;
    }
    .card{
        width:90%;
        padding-left:16%;
        padding-right: 16%;
        margin-left: auto;
        margin-right: auto;
    }

    .card .title{
        font-size: 14px;
        font-weight: bold;
    }

    .card .source a{
        font-size: 10px;
        padding-top: 3%;
    }
    .card .card-detail {
        font-size: 8px;
    }
    .profile img{
        width: 60px;
        padding-top: 10%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        float:none;
    }
    .vote {
        margin-left: 5px;
        padding-top: 1%;
    }

    .vote a{
        color:#9b9b9b;
        padding-top: none;
        margin-left: 5px;
    }

    .fa-times{
        color: #9b9b9b;
        float:right;
        margin-right: 0;
        cursor: pointer;
    }
}

</style>