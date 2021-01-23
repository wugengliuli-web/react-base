# react 项目 搭配 mobx 数据管理

yarn / npm install

yarn start / npm run start

# 结构思路

# page 为根本，可配置，每个 page 可配置 rootClassName 为根节点的 class displayName 当前页面的背景色， 默认灰色

# mobx 管理数据，分为全局数据和单个页面的数据

# 全局数据为必备，如果用户进行了刷新，会强制重新请求。

# config 中的 plugins 可配置 antd 和 路径

# less 嵌套写 css

# 通用 hook 使用 react-use， 自己写的通用 hook 放在 hook 里面
