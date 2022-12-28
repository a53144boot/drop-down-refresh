import Vue from 'vue';
import DropDownRefresh from './src/drop-down-refresh.vue';

new Vue({
    el: '#container',
    components: {
        'drop-down-refresh': DropDownRefresh
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
