# vue-drop-down-refresh
vue drop-down-refresh
> Vuejs 2.0 for mobile implements drop down refresh.

## Usage

### Install

```bash
npm install vue-drop-down-refresh --save
```

### CommonJS

```javascript
var VuePullRefresh = require('vue-pull-refresh');

new Vue({
    components: {
        'vue-drop-down-refresh': VuePullRefresh
    },
    data: function () {
        return {};
    },
    methods: {
        onRefresh: function() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        }
    },
    template: '<vue-drop-down-refresh :on-refresh="onRefresh"></vue-drop-down-refresh>'
});
```

### ES6
```javascript
import VueDropDownRefresh from 'vue-drop-down-refresh';

new Vue({
    components: {
        'vue-drop-down-refresh': VueDropDownRefresh
    },
    data: function () {
        return {};
    },
    methods: {
        onRefresh: function() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        }
    },
    template: '<vue-drop-down-refresh :on-refresh="onRefresh"></vue-drop-down-refresh>'
});
```

### Props
| Property | Description |
|:--|:--|
| onRefresh | refresh event;Should return a promise. |
| config | {<br>errorLabel: label shows when error<br>startLabel: label shows when pull down start<br>readyLabel: label shows when ready to refresh<br>loadingLabel: label shows when loading<br>pullDownHeight: the height toggle pull down refresh action<br>} |

## Contribution
First, install dependencies
```
npm install
```
Second, setup development environment
```
npm run dev
```

## License
