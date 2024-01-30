<template>
    User #{{ id }}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nemo natus quod placeat rerum omnis rem velit facilis
    animi quibusdam. Labore nihil magnam minima amet cum ea sint similique reiciendis!
    <div style="font-weight: 800;"> User #{{ id }} is a good man</div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params['id'] // поле для проверки id подгруженного роута
        }
    },
    watch: {
        $route(toR) {
            this.id = toR.params['id'];
            // подставляем корректный id при каждой загрузке страницы
        }
    }
}
</script>