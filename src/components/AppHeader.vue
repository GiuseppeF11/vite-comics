<script>
export default {
    data() {
        return {
            navbar: [
                {
                    link: 'CHARACTERS'
                },
                {
                    link: 'COMICS'
                },
                {
                    link: 'MOVIES'
                },
                {
                    link: 'TV'
                },
                {
                    link: 'GAMES'
                },
                {
                    link: 'COLLECTIBLES'
                },
                {
                    link: 'VIDEOS'
                },
                {
                    link: 'VIDEOS'
                },
                {
                    link: 'FANS'
                },
                {
                    link: 'NEWS'
                },
                {
                    link: 'SHOP'
                },
            ]

        };
    },
    methods: {
    }
}
</script>

<template>
        <body>
            <div class="container-header">
                <div class="logo-box">
                    <img src="../../public/img/dc-logo.png" alt="">
                </div>
                <nav class="navbar">
                    <div class="navbar-link" v-for="elem in navbar">
                        <a href="">{{elem.link}}</a>
                    </div>
                </nav>
            </div>
        </body>
</template>

<style lang="scss" scoped>
.container-header {
    height: 12vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-box {
        width: 100px;
        padding: 20px;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 70%;
        font-size: small;
        height: 100%;

        .navbar-link {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 50px;
            height: 100%;

            &:hover {
                border-bottom: 5px solid #0282F9;
                a {
                    color: #0282F9;
                }
            }

            a {
                text-decoration: none;
                height: 100%;
                color: rgb(90, 89, 89);
                padding: 0 10px;
                display: flex;
                align-items: center;
            }
        }
        
    }

}
</style>
