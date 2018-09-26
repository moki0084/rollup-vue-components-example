### Toast

#### 使用
```vue
<script>
import { Toast } from '**/components';
export default {
  methods: {
    handleOpenToast () {
      Toast('toast')
      Toast({
        message: 'operation success',
        iconClass: 'icon icon-success'
      })
    }
  }
}
</script>
```

#### API
|参数|描述|类型|默认值|
|----|----|----|----|
|message|文本|String|''|
|position|toast 位置 top middle bottom |String|middle|
|duration|toast 显示时间毫秒 |Number|3000|
|className|内容|String|''|
|iconClass|icon class|String|''|

#### 方法
|名称|描述|参数|
|----|----|----|
|close|关闭toast||
