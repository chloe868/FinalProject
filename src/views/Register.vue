<template>
<div class="container">
    <div class="flex-wrap">
        <v-fieldset>
            <v-form action novalidate>
                <input type="radio" name="rg" id="sign-in" checked/>
                <input type="radio" name="rg" id="sign-up" />
                <label for="sign-up">Company</label>
                <label for="sign-in">Customer</label>
                <input class=" sign-in" type="text" placeholder="Lastname" />
                <input class=" sign-in" type="text" placeholder="Firstname" />
                <input class=" sign-in" type="date" placeholder="birthday" />
                <input class=" sign-in" type="text" placeholder="Address" />
                <input class=" sign-in" type="number" min="0" placeholder="age" />
                <input class=" sign-in" type="email" placeholder="Email" />
                <input class=" sign-in" type="password" placeholder="Password" />
                <input class=" sign-in" type="min" min="0" placeholder="contact number" />
                <input class=" sign-in" type="number" min="0" placeholder="driver_liscense number" />
                <input class="sign-up" type="text" placeholder="Company Name" />
                <input class="sign-up" type="text" placeholder="Company Address" />
                <input class="sign-up" type="number" min="0" placeholder=" Contact Number" />
                <input class="sign-up" type="email" placeholder=" Email" />
                <input class="sign-up" type="password" placeholder=" Password" />
                <button>Submit</button>
            </v-form>
        </v-fieldset>
    </div>
</div>
</template>
<style lang="scss" scoped>
    $color-body: black;
    $color-accent:blue;
    $color-input: white; //    fix position radio input off-canvas
    input[type="radio"] {
        position: fixed;
        left: -100px;
    } //    style input fields (note hidden by default) 
    input:not([type="radio"]) {
        appearance: none;
        background-color: $color-input;
        display: block;
        transition: 300ms ease;
        border-radius: 20px;
        border: 0;
        max-height: 0;
        margin: 0;
        padding: 0 10px;
        overflow: hidden;
        width: 400px;
        opacity: 0;
        font-size: 16px;
        text-align: center;
        outline: 0;
    } //    show input based on radio selection 
    [id="sign-in"]:checked~input.sign-in,
    [id="sign-up"]:checked~input.sign-up {
        max-height: 40px;
        padding: 10px;
        margin: 10px 0;
        opacity: 1;
    } //    submit button 
    button {
        width: 250px;
        height: 40px;
        border-radius: 7px;
        background-color:#FF6600;
        font-size: 0;
        &:before {
            font-size: 16px;
        }
    } //    show botton text based on radio selection
    [id="sign-in"]:checked~button:before {
        content: 'Sign In';
    }
    [id="sign-up"]:checked~button:before {
        content: 'Sign Up';
    } //            
    label {
        position: relative;
        display: inline-block;
        text-align: center;
        font-weight: 700;
        cursor: pointer;
        color: $color-accent;
        transition: 300ms ease;
        width: calc(100% / 3 - 4px); //    pointer arrow
        &:after {
            content: '';
            border: 10px solid transparent;
            position: absolute;
            bottom: -10px;
            left: calc(50% - 10px);
            transition: inherit;
        }
    } //     set active label marker
    [id="sign-in"]:checked~[for="sign-in"],
    [id="sign-up"]:checked~[for="sign-up"] {
        color: $color-input;
        &:after {
            border-bottom-color: $color-input;
        }
    } //    flex does not work well on fiedset 
    //    why we use a styling wrapper
    .flex-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: auto;
        text-align: center;
    }
    body {
        background-color: $color-body;
        font-size: 16px;
    }
    .container{
        margin-top: 100px;
        margin-left: 30%;
        margin-right: 20%;
        width:450px;
        background-color:#FF66FF;
    }
</style>
<script>
export default {
    
}
</script>