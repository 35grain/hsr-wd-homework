<template>
    <footer>
        <div>
            <p class="team-name">Team hsr</p>
            <div class="router-links">
                <router-link to="/contactus">Contact us</router-link>
            </div>
            <p class="credits">© 2021</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterComp",
    };
</script>

<style lang="scss" scoped>
    /* Footer */
    footer {
        position: fixed;
        bottom:0;
        width:100%;
        height:50px; 
    }

    div {
        display: flex;
        background-color: #ffffff;
        justify-content: space-between;
        transition: 0.3s;
        height: 50px; 

        p {
            flex-grow: 4;
            padding: 10px;
            margin: auto 5px;
            font-weight: bold;
        }

        .team-name{
            display: flex;
            justify-content: left;
        }

         div.router-links {
            display: flex;
            justify-content: center;

            a {
                text-decoration: none;
                margin: auto 5px;

                &.router-link-active {
                    color: #009bca;
                }
            }
        }

        .credits{
            display: flex;
            justify-content: right;
        }
    }
</style>