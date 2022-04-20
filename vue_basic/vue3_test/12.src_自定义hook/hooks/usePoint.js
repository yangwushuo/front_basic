import {reactive,onMounted,onBeforeUnmount} from 'vue';
export default function(){
    
    var p = reactive({
        x: 0,
        y: 0,
    });

    function savePoint(event){
        p.x = event.pageX;
        p.y = event.pageY;
        console.log(`x: ${p.x},y: ${p.y}`);
    }

    //组件创建完毕之后
    onMounted(() => {
        window.addEventListener('click',savePoint);
    })

    //组件卸载之前
    onBeforeUnmount(() => {
        window.removeEventListener('click',savePoint);
    })
    
    return p;
}