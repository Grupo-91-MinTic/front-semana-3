<template>
    <div>
        <div class="card m-3 p-3" style="width: 100%;">
            <h1 class="bg-success text-center p-2">Sprint III</h1>

            <form
                class="row justify-content-center"
                @click.prevent="signgin">
                <div class="form-group row p-5 m-5">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control border-success" id="email" placeholder="Email">
                    </div>
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control border-success" id="inputPassword" placeholder="Password">
                    </div>
                </div>
                <button
                class="btn btn-success btn-block w-75 my-4"
                type="submit"
                :click="signgin"
                >
                Sign in</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        signgin() {
            localStorage.token = 1;
        }
    }
}
</script>
<style lang="css">
.card {
    background: #2c3e50;
}
</style>