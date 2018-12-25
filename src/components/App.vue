<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            msg: 'hello everyone'
        }
    },
    mounted: function() {
        
    }
}
</script>
 
<style>
#app{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    right:0;
    bottom: 0;
    height: 100%;
  }
</style>
