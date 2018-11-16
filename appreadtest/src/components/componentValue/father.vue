<template>
    <div>
        <child :message="list"></child>
    </div>
</template>

<script>
import child from './child'
export default {
    components: {
        child
    },
    data () {
        return {
            list: [
                {
                    name: 'a',
                    age: '12'
                },{
                    name: 'b',
                    age: '78'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
