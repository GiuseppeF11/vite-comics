<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        
    },

    props: {
        img: String,
        name: String,
    }
}
</script>

<template>


    <div class="card">
        <div class="img-box" >
            <img :src="img" :alt="name">
        </div>
        <h5>
            {{name}}
        </h5>
    </div>

    
</template>

<style lang="scss" scoped>

.card {
    width: (100% / 6);                
    height: 250px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        background-color: #555555;
    }
    .img-box {
        width: 150px;
        height: 200px;
        overflow: hidden;
        margin: 0 auto;

        img  {
            width: 100%;
        }
    }

    h5 {
        padding: 5px 0;
        font-size: 15px;
        width: 150px;
        margin: 0 auto;
    }

}
</style>
