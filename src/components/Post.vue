<template>
    <div>
        <div class="resetPanel">
            <button v-on:click="ResetLikeCount()" class="btn" type="button" name="reset">Reset like count</button>
        </div>
        <div class="userPost" v-for="post in posts" :key="post.id">
            <div class="userPostHeader">
                <div>
                    <img v-if="post.author.profilePicture" :src="post.author.profilePicture" alt="Profile picture">
                    <img v-else src="../assets/img/defaultUser.png" alt="Profile picture">
                    <p>{{ post.author.username }}</p>
                </div>
                <p>{{ post.date }}</p>
            </div>
            <div class="userPostContent">
                <img v-if="post.cover" :src="post.cover" alt="Post picture">
                <p>{{ post.body }}</p>
                <button v-on:click="Like(post.id)" class="btn" type="button" name="like">👍</button>
                <span>{{ post.likes }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data: function () {
            return {}
        },
        computed: {
            posts() {
                return this.$store.state.posts
            }
        },
        methods: {
            Like: function ($id) { 
                this.$store.dispatch("LikeAct", { 
                    $id 
                }) 
            },
            ResetLikeCount: function () { 
                this.$store.dispatch("ResetLikeCountAct") 
            },
        }
    };
</script>

<style scoped lang="scss">
    .userPost {
        background-color: #fff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        border-radius: 2px;
    }

    .userPostHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;

        img {
            height: 50px;
            width: 50px;
            border-radius: 99px;
            object-fit: cover;
        }
    }

    .userPost+.userPost {
        margin-top: 20px;
    }

    .userPostContent p {
        margin: 4px 12px;
    }

    .userPostContent img {
        margin: 0 auto;
        width: 100%;
    }

    .userPostContent button {
        padding: 4px 12px;
        margin: 10px 10px;
        box-shadow: 0 3px #999;

        &:active {
            box-shadow: 0 1px #666;
            transform: translateY(2px);
        }
    }

    .resetPanel {
        display: flex;
        justify-content: center;
        margin: 10px;
    }
</style>