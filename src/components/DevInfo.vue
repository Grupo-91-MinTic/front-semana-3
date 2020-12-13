<template>
    <div>
        <div class="p-5 mb-3">
          <div >
            <h1>Meet us at github</h1>
          </div>
          <br><br>
          <a href="https://github.com/Grupo-91-MinTic/semana-3-91.git" target="blank">
            <img class="text-center" :src="icons[0]"/>
            <br> <strong>Encuentra el trabajo de nuestro equipo backend aquí</strong>
          </a>
          <hr>
           <a href="https://github.com/Grupo-91-MinTic/front-semana-3.git" target="blank">
            <img class="text-center" :src="icons[0]"/>
            <br> <strong>Encuentra el trabajo de nuestro equipo frontend aquí</strong>
          </a>
        </div>
        <div class="container-fluid text-white bg-dark">
            <div class="row p-5">
                <div class="col-6">
                    <p class="text-center">{{description}}</p>
                </div>
                <div class="col-6">
                    <a :href="icons[1]" target="blank">
                        <img class="text-center" src="https://img.icons8.com/dusk/64/000000/linkedin.png"/>{{names[0]}} {{charges[0]}}
                    </a>
                    <br>
                    <a href="https://github.com/AndresMpa" target="blank">
                        <img class="text-center" :src="icons[0]"/>{{names[0]}} {{charges[0]}}
                    </a>
                    <hr>
                    <a href="https://github.com/carSneider99" target="blank">
                        <img class="text-center" :src="icons[0]"/>{{names[1]}} {{charges[0]}}
                    </a>
                    <hr>
                    <a href="https://github.com/AlejoCM12" target="blank">
                        <img class="text-center" :src="icons[0]"/>{{names[2]}} {{charges[0]}}
                    </a>
                    <hr>
                    <a href="https://github.com/JuanSebOrduz" target="blank">
                        <img class="text-center" :src="icons[0]"/>{{names[3]}} {{charges[0]}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DevInfo",
    data(){
        return{
            icons: ['https://img.icons8.com/dusk/64/000000/github.png', 'https://www.linkedin.com/in/andr%C3%A9s-m-prieto-263a511b7/'],
            repository: 'https://github.com/Grupo-91-MinTic/semana-2-91',
            description: 'Este proyecto se creo para sustentar lo aprendido en el sprint III del ciclo 3, usando Vue, Boostrap, JS, Express',     
            names: ['Andrés Manuel Prieto Álvarez', 'Carlos Sneider Soto Sogamoso', 'Harold Alejandro Caicedo', 'Juan Sebastion Ortiz'],
            charges: ['(Main frontend developer)', '(Main backend developer)', '(Frontend developer)', '(Backend developer)']
        }
    }
}
</script>
<style lang="css">
    
</style>