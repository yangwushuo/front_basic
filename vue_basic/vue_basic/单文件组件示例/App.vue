<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from '../../vue_test/src/components/School.vue';
    import Student from '../../vue_test/src/components/Student.vue';

    export default {
        name: 'App',
        components:{
            School,
            Student
        }
    }
</script>

<style>

</style>