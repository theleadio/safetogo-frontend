<template>
    <div class="container-fuild post-list overlay">
        <i class="fas fa-times" v-on:click="hide"></i>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card-container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 card-header">
                            <h3>TESTING TESTING TESTING</h3>
                            <h6>Reported Date: March 21, 2020 22:22 UTC</h6>
                            <h6><a href="" class="card-source">source</a></h6>
                            <div class="vote-wrapper">
                                <button class="btn up-vote">
                                    10 <i class="far fa-thumbs-up"></i>
                                </button>
                                <button class="btn down-vote">
                                    1 <i class="far fa-thumbs-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 card-profile">
                            <img src="~/assets/img/helmet.png">
                            <span>SAFETOGO</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
        
    },
    methods: {
        hide: function(){
            
        }
    }
}
</script>
<style>
.post-list{
    background-color: rgba(0, 0, 0, .3);
    backdrop-filter: blur(5px);
    bottom:0;
    height:70%;
}
.card-container{
    width:100%;
    background-color: #fff;
    padding:5%;
}
.card-header{
    background-color:#fff !important;
    border-bottom: none !important; 
}
.card-header h3{
    font-size: 22px;
    background-color:none !important;
    border-bottom: none !important; 
}
.card-container, .card-profile {
    height:100%;
}
.card-profile{
    text-align: center;
}
.card-profile img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.vote-wrapper button{
    color:#9b9b9b;
    padding-top:1%;
    margin-left: 5px;
    font-size:18px;
}
.fa-times{
    color: #fff;
    float:right;
    cursor: pointer;
    font-size: 22px;
}

.fa-times:hover{
    color: #fefefe;
}
#test p {
    margin-top: 25px;
    font-size: 21px;
    text-align: center;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}
</style>