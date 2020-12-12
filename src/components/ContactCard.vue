<template>
    <div>
        <div class="card m-3 " style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4 p-3">
                    <img :src="avatar" class="card-img" alt="Andres M. Prieto A">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-center">{{name}}</h5>
                    <blockquote class="text-center">{{rol}}</blockquote>
                    <p class="card-text">{{cardDescription}}</p>
                    <a :href="github" class="btn btn-success d-block" target="blank">Meet me</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            avatar: 'https://avatars2.githubusercontent.com/u/39841241?s=460&v=4',
            name: 'Andres M. Priero Alvarez',
            rol: '(Software engineer and frontend Developer)',
            cardDescription: "I'm a geek pacionated about TI, actually I'm studing at the University, so I make code when it let me do it",
            github: 'https://github.com/AndresMpa'
        }
    }
}
</script>
<style lang="css">
</style>