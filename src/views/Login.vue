<template>
    <div class="login-form">
        <h1>Welcome to postIt!</h1>
        <router-link to="/contactus">Have an account created</router-link>
        <p>Or</p>
        <p>Please Log In</p>

        <form action="/">
            <input type="email" name="email" id="email" placeholder="Email" required>
            <input type="password" name="password" id="password" placeholder="Password" required>
            <button class="btn btn-login" type="submit">Log In</button>
        </form>

        <router-link to="/contactus">Forgot password?</router-link>
    </div>
</template>

<style lang="scss">
    /* Login form */
    .login-form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
        display: flex;
        flex-direction: column;

        background-color: #fff;
        padding: 75px 100px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        border-radius: 2px;

        &::after {
            content: '';
            position: absolute;
            width: 85px;
            height: 85px;
            background: url('/assets/img/logo.png') top left no-repeat;
            background-size: contain;
            top: 5px;
            left: 10px;
        }

        input,
        button {
            display: block;
            margin: 0 auto 8px;
        }

        >a:not(:last-child) {
            margin-bottom: 16px;
        }

        >h1 {
            font-size: 24px;
            font-weight: normal;
        }
    }
</style>