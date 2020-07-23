user表

| 字段名称    | 数据类型 | 说明     |
| ----------- | -------- | -------- |
| userId      | Number   | 用户id   |
| nickName    | String   | 昵称     |
| avatar      | String   | 头像     |
| phoneNum    | String   | 手机号   |
| password    | String   | 密码     |
| addressData | Array    | 地址信息 |

goods

| 字段名称     | 数据类型 | 约束 | 说明     |
| ------------ | -------- | ---- | -------- |
| goodId       | Number   | 必填 | 商品id   |
| swiperDatas  | Array    | 必填 | 轮播图   |
| goodTitle    | String   | 必填 | 商品标题 |
| currentPrice | Number   | 必填 | 当前价格 |
| oldPrice     | Number   |      | 原价     |
| prices       | Array    | 必填 | 价格列表 |
| shopId       | Number   | 必填 | 商家id   |
| categoryType | String   |      | 种类     |
| categorys    | Array    |      | 类型     |
| sizeUnit     | String   | 必填 | 单位     |
| sizes        | Array    | 必填 | 单位数组 |
| expressFree  | Number   | 必填 | 快递费   |
| storeCount   | NUmber   | 必填 | 库存     |
| monthSale    | Number   | 必填 | 月销量   |
| address      | String   | 必填 | 发货地址 |
| commentCount | Number   | 必填 | 评论条数 |
| moreImages   | Array    | 必填 | 详细介绍 |

shop

| 字段名称   | 数据类型 | 约束 | 说明     |
| ---------- | -------- | ---- | -------- |
| shopId     | Number   | 必填 | 商品id   |
| shopAvatar | String   |      | 商家头像 |
| shopName   | String   | 必填 | 商店名称 |
| fans       | Number   | 必填 | 粉丝数   |
| level      | Number   |      | 商店等级 |
| rating     | Object   |      | 商家分值 |

comments

| 字段名称 | 数据类型 | 约束 | 说明     |
| -------- | -------- | ---- | -------- |
| goodId   | Number   | 必填 | 商品id   |
| comments | Array    |      | 商家头像 |

| 字段名称     | 数据类型 | 约束 | 说明     |
| ------------ | -------- | ---- | -------- |
| nickName     | String   | 必填 | 昵称     |
| avatar       | String   |      | 头像     |
| commentTitme | Date     | 非空 | 评论时间 |
| burInfo      | Object   |      | 商品信息 |
| content      | String   |      | 评论内容 |
| picUrls      | Array    |      | 评论图片 |