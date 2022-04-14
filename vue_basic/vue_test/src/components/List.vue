<template>
    <div class="row">
        <div class="card" v-for="user in users" :key="user.id">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
	</div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            users: []
        }
    },
    methods: {
        receiveUsers(users){
            this.users = users;
        }
    },
    mounted() {
        this.$bus.$on('getUsers',this.receiveUsers)
    },
    beforeDestroy() {
        this.$bus.$off('getUsers')
    },
}
</script>

<style>

</style>