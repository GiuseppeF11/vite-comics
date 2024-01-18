<script>
export default {
    data() {
        return {
        };
    },
    methods: {

    }
}
</script>

<template>
    <footer>
        <div class="footer-top">
            <div>
                <div class="footer-row">
                <div class="footer-col">
                    <ul>
                        <h3>
                            <a href="">
                                DC COMICS
                            </a>
                        </h3>
                        <li>
                            <a href="">
                                Characters
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Comics
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Movies
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Tv
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Games
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Videos
                            </a>
                        </li>
                        <li>
                            <a href="">
                                News
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>SHOP</h3>
                        </li>
                        <li>Shop Dc Collectibles</li>
                    </ul>
                </div>
            </div>
            <div class="footer-row">
                <div class="footer-col">
                    <ul>
                        <h3>
                            <a href="">
                                DC
                            </a>
                        </h3>
                        <li>
                            <a href="">
                                Terms Of Use
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Privacy policy (New)
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Ad Choices
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Advertising
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Subscriptions
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Talent Workshops
                            </a>
                        </li>
                        <li>
                            <a href="">
                                CPSC Certificates
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Ratings
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Shop Help
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-row">
                <div class="footer-col">
                    <ul>
                        <h3>SITES</h3>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>
                    <ul>
                        <h3>Shop Dc</h3>
                        <li>Shop Dc Collectibles</li>
                    </ul>
                </div>
            </div>
            <div class="logo-box">
                <img src="../../public/img/dc-logo-bg.png" alt="">
            </div>
            </div>
        </div>
        <div class="footer-bottom">bottom</div>
    </footer>
</template>

<style lang="scss" scoped>
.footer-top{
    height: 48vh;
    background-image: url(../../public/img/footer-bg.jpg);
    display: flex;
    justify-content: space-around;
    color: white;

    &>div {
            margin: 0 auto;
            width: 80vw;
            display: flex;
            justify-content: space-around;
        }

    .footer-row {
        padding: 20px 0;
        
        .footer-col {
            height: 100%;

        h3 {
            padding-bottom: 5px;
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            a {
                color: white;
            }
        }

        a {
            color: rgb(167, 167, 167);
            font-size: small;
            font-family:Verdana, Geneva, Tahoma, sans-serif;
        }
    }
    }

    .logo-box {
        width: 30%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        
        img {
            height: 150%;
            object-fit: contain;
        }

    }
}
</style>
