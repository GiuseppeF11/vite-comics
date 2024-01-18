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
body {
}


.container-header {
    height: 15vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo-box {
        width: 100px;
        padding: 20px;

        img {
            width: 100%;
        }
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 70%;
        font-size: small;

        .navbar-link {
            height: 100%;
            display: flex;
            align-items: center;

            &:hover {
                border-bottom: 5px solid #0282F9;
                a {
                    color: #0282F9;
                }
            }

            a {
                text-decoration: none;
                color: rgb(90, 89, 89);
                padding: 10px 0;
            }
        }
        
    }

}
</style>
