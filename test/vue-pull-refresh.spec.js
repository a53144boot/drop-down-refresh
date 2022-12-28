/* global describe, it, expect */
import Vue from 'vue';
import VueDropDownRefresh from '../src/vue-drop-down-refresh.vue';

describe('vue-drop-down-refresh.vue', () => {
    it('should have correct text', () => {
        expect(VueDropDownRefresh.data().text).toBe('Hello VueDropDownRefresh');
    });

    it('should render correct text', () => {
        const vm = new Vue({
            template: '<div><vue-drop-down-refresh></vue-drop-down-refresh></div>',
            components: {
                'vue-drop-down-refresh': VueDropDownRefresh
            }
        }).$mount();
        expect(vm.$el.querySelector('h2').textContent)
            .toBe('Hello VueDropDownRefresh');
    });
});
