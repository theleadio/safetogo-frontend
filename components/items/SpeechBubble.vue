<template>
    <div class="absolute z-600 w-full top-0 left-0 form-wrapper how-to-background">
        <div class="flex justify-start mt-16 px-5">
            <img class="h-12 w-12 lg:h-20 lg:w-20 mr-3" src="~/assets/img/helmet.png">
            <div class="relative bg-white-400 w-2/3 py-3 px-3 shadow-xl rounded-lg">
                <div class="up-arrow left-0 mt-2 lg:mt-4"></div>
                <div class="flex justify-between">
                    <div class="font-semibold text-lg"> Welcome to SafeToGo </div>
                    <i class="fas fa-times cursor-pointer"></i>
                </div>
                <div class="text-base">
                    <p>
                        Drop a pin in <label class="text-lg">SafeToGo</label> and tell the community what happened there
                    </p>
                    <p> Right Click on the map to drop a pin </p>
                    <p> Login with your Google Account to create a post on the pin </p>
                    <p> Click on helmet logo to show this message box again =] </p>
                </div>
                <div class="flex justify-start items-center py-3 text-sm">
                    <img class="h-8 w-8 mr-3 font-serif" src="~/assets/img/lead-logo-nowords.png"> 
                    <div class="font-medium antialiased">This is a community project by LEAD (<a href="https://www.thelead.io">https://www.thelead.io</a>) for further details please email <span class="px-1 font-bold">edmund@thelead.io</span> or <span class="px-1 font-bold">csr@thelead.io</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.up-arrow{
    border-style: solid;
    position: absolute;
    border-color: #fff transparent transparent transparent;
    border-width: 8px 8px 0px 8px;
    transform: rotate(90deg);
    margin-left:-12px;
}
.how-to-background{
    background-color: rgb(0, 0, 0, .5);
    backdrop-filter: blur(4px);
}
</style>
