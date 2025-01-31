---
title: rate
subtitle: 评分
type: Non-built-in widgets
---

对评价进行展示，对事物进行快速的评级操作。

## 导入模块

非内置模块，需要额外在 [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11) 导入 `RateWidgetModule`。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[maximum]` | 总星数 | `number` | `5` |
| `[multipleOf]` | `0.5` 表示允许半选，其它值表示不允许 | `number` | `0.5` |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[allowClear]` | 是否允许再次点击后清除 | `boolean` | `true` |
| `[autoFocus]` | 自动获取焦点 | `boolean` | `false` |
| `[text]` | 提醒文本模板，`{{value}}` 表示当前值（注意无任何空格） | `string` | - |
| `[tooltips]` | 自定义每项的提示信息 | `string[]` | `[]` |
