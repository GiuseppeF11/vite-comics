<script>
export default {
    data() {
        return {
            shopOptions: [
            {
                icon: '/img/buy-comics-digital-comics.png',
                text: 'DIGITAL COMICS'
            },
            {
                icon: '/img/buy-comics-merchandise.png',
                text: 'DC MERCHANDISE'
            },
            {
                icon: '/img/buy-comics-subscriptions.png',
                text: 'SUBSCRIPTION'
            },
            {
                icon: '/img/buy-comics-shop-locator.png',
                text: 'COMIC SHOP LOCATOR'
            },
            {
                icon: '/img/buy-dc-power-visa.svg',
                text: 'DC POWER VISA'
            },
        ]

        };
    },
    methods: {
        
    }
}
</script>

<template>
    <main>
        <div class="content-box">
            <div>
             -- Content goes here --
            </div>
        </div>

        <div class="shop-options">
            <div>
                <div class="shop-box" v-for="elem in shopOptions">
                    <div class="img-box">
                        <img :src="elem.icon" alt="">
                    </div>
                    <div>
                        {{elem.text}}
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    
    .content-box {
        display: flex;
        align-items: center;
        font-size: 25px;
        height: 12vh;
        background-color: #1C1C1C;
        color: whitesmoke;

        &>div {
            margin: 0 auto;
            width: 77vw;
        }
    }

    .shop-options {
        height: 15vh;
        background-color: #0282F9;

        &>div {
            margin: 0 auto;
            width: 80vw;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .shop-box {
                display: flex;
                align-items: center;
                color: white;

                &:hover {
                    cursor: pointer;
                }

                .img-box {
                    width:50px;
                    height: 50px;
                    padding-right: 10px;

                    img {
                        height: 100%;
                        object-fit: contain;
                    }
                }
            }
        }
    }


}

</style>
