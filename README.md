# drop-down-refresh
drop-down-refresh
> Vuejs 2.0 for mobile implements drop down refresh.

## Usage

### Install

```bash
npm install drop-down-refresh --save
```

### CommonJS

```javascript
var DropDownRefresh = require('drop-down-refresh');

new Vue({
    components: {
        'drop-down-refresh': DropDownRefresh
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
    template: '<drop-down-refresh :on-refresh="onRefresh"></drop-down-refresh>'
});
```

### ES6
```javascript
import DropDownRefresh from 'drop-down-refresh';

new Vue({
    components: {
        'drop-down-refresh': DropDownRefresh
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
    template: '<drop-down-refresh :on-refresh="onRefresh"></drop-down-refresh>'
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
