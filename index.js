import Vue from 'vue';
import VueDropDownRefresh from './src/vue-drop-down-refresh.vue';

new Vue({
    el: '#container',
    components: {
        'vue-drop-down-refresh': VueDropDownRefresh
    },
    data() {
        return {};
    },
    methods: {
        onRefresh() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    Math.random() < 0.5 ? resolve() : reject();
                }, 1000);
            });
        }
    }
});
