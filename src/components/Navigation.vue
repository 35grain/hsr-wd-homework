<template>
    <header>
        <nav>
            <div>
                <img src="../assets/img/logo.png" alt="Logo" />
            </div>
            <div class="router-links">
                <router-link to="/">Posts</router-link>
                <router-link to="/contactus">Contact us</router-link>
                <router-link to="/login">Login</router-link>
            </div>
            <div class="user-picture">
                <img id="profile" src="../assets/img/defaultUser.png" alt="Profile picture" />
                <span id="dropdown" class="dropdown-hidden">
                    <li>John Doe</li>
                    <li>john.doe@example.com</li>
                </span>
            </div>
        </nav>
    </header>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "Navigation",
        mounted: function () {
            $("#profile").click(function () {
                let id = $("#dropdown")
                switch (id.attr("class")) {
                    case "dropdown-hidden":
                        id.attr("class", "dropdown");
                        break;
                    case "dropdown":
                        id.attr("class", "dropdown-hidden");
                        break;
                }
            })
        }
    };
</script>

<style lang="scss" scoped>
    /* Nav */
    header {
        position: sticky;
        top: 0;
        z-index: 999;
    }

    nav {
        display: flex;
        background-color: #ffffff;
        /* align-items: center; */
        justify-content: space-between;
        transition: 0.3s;

        div {
            height: 30px;
            flex-grow: 4;
            padding: 10px;


            img {
                height: 100%;
            }
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

        div.user-picture {
            display: flex;
            position: relative;
            justify-content: right;


            img {
                height: 100%;
                border-radius: 99px;
            }
        }

        span.dropdown-hidden {
            display: none;
        }

        span.dropdown {
            display: block;
            position: absolute;
            list-style: none;
            background-color: #ffffff;
            box-shadow: 0 8px 16px -8px rgba(22, 98, 152, 0.5);
            padding: 12px 16px;
            margin: 40px -5px;
            justify-content: center;
        }

        &:hover {
            box-shadow: 0 5px 10px rgba(22, 98, 152, 0.5);
        }
    }
</style>