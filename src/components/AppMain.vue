<script>
import Cards from './Cards.vue';
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
            ],

                cards: [
                {
                    "thumb": "https://www.coverbrowser.com/image/action-comics/1-1.jpg",
                    "price": "$19.99",
                    "series": "Action Comics",
                    "type": "comic book",
                },
                {
                    "thumb": "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",
                    "price": "$3.99",
                    "series": "American Vampire 1976",
                    "type": "comic book",
                },
                {
                    "thumb": "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",
                    "price": "$16.99",
                    "series": "Aquaman",
                    "type": "graphic novel",
                },
                {
                    "thumb": "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",
                    "price": "$2.99",
                    "series": "Batgirl",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",
                    "price": "$3.99",
                    "series": "Batman",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg",
                    "price": "$2.99",
                    "series": "Batman Beyond",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg",
                    "price": "$3.99",
                    "series": "Batman/Superman",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg",
                    "price": "$4.99",
                    "series": "Batman/Superman Annual",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg",
                    "price": "$5.99",
                    "series": "Batman: The Joker War Zone",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg",
                    "price": "$6.99",
                    "series": "Batman: Three Jokers",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg",
                    "price": "$4.99",
                    "series": "Batman: White Knight Presents: Harley Quinn",
                    "type": "comic book",
                },
                {
                    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg",
                    "price": "$16.99",
                    "series": "Catwoman",
                    "type": "graphic novel",
                },
                
            ]

        };
    },
    components: {
        Cards
    }
}
</script>

<template>
    <main>
        <div class="content-box jumbo-box">
            <div class="jumbo-box">
                <div>
                    CURRENT SERIES
                </div>
            </div>
            <div class="cards-container">
                <Cards 
                    v-for="(elem , i) in cards"
                    :img="elem.thumb"
                    :name="elem.series"
                    />
            </div>
            <div class="button-container">
                <button>
                    LOAD MORE
                </button>
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
    min-height: 500px;
    .content-box {
        min-height: 500px;
        font-size: 25px;
        color: whitesmoke;
        background-color: #303030;
        .jumbo-box {
            height: 45vh;
            background-size: cover;
            background-image: url(../../public/img/jumbotron.jpg);

            div {
                position: absolute; bottom: 40vh; left: 10vw;
                background-color: #0282F9;
                padding: 10px 20px;
                font-weight: bold;
            }
        }

        .cards-container {
            margin: 0 auto;
            width: 80vw;
            padding: 30px 0;
            display: flex;
            flex-wrap: wrap;
        }

        .button-container {
            display: flex;
            justify-content: center;
            padding: 20px;

            button {
                padding: 10px 20px;
                font-size: 15px;
                font-weight: bold;
                background-color: #0282F9;
                border: none;
                cursor: pointer;

                &:hover {
                    background-color: #3ca1ff;
                }
            }
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
                padding: 5px;

                &:hover {
                    cursor: pointer;
                    border: 3px solid white;
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
