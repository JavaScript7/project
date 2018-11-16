<template>
    <div>
        <ul>
            <li v-for="(item,i) in message" :key="i"> <!--渲染父组件传过来的值-->
                <p>{item.name}</p>
                <p>{{item.age}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['message']  //子组件通过props接受父组件传递过来的数据值
}
</script>

<style scoped>

</style>


