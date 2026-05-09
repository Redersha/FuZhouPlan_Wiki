# FuZhouPlan Wiki

浮舟计划 (FuZhouPlan) 是一款 Minecraft Java Edition <mark>Forge 1.20.1</mark> 模组，以 <mark>生物基因科技</mark> 和 <mark>工业电力科技</mark> 为主要玩法。本文档站是模组的官方 Wiki。

## 下载

- [Modrinth](https://modrinth.com/mod/fuzhouplan#download)

## 面向玩家

### 背景故事

人类在木星的大规模开发，因大量未报备的私人工厂改变了其公转速度。这一微小但关键的变量未被监测，导致一个借木星进行引力弹弓的未知巨型天体，在依据错误旧数据的计算中被忽略。当天体进入内太阳系，人们才骇然发现，它正被加速撞向月球。危机关头，月球上部分居民视撞击为千载难逢的逃生机会，计划借助其动能离开地月系统，而地球社会则陷入是否要拯救月球、以及谁有权决定两者命运的激烈争执。

### 核心玩法

#### 生物/基因科技

```
麻醉生物 -> 提取基因样本 -> 解析 DNA -> 获得生物 DNA 储存罐
```

#### 工业科技

需要电力系统作为基础。

* 分子材料工业


## 面向 Wiki 贡献者

### 本 Wiki 的技术栈 
~~（这算哪门子技术栈）~~

- [VitePress](https://vitepress.dev/) - 静态文档生成器
- [pnpm](https://pnpm.node.org.cn/installation) - 包管理器
- [TypeScript](https://www.tslang.cn/) - TypeScript 在 VitePress 中主要是提供类型安全和开发时的智能提示，让配置和组件开发更可靠高效。
- [Markdown](https://markdown.com.cn/basic-syntax/) - 一种轻量级的标记语言，专注于文字内容，易读易写。

### 本地开发

1. 克隆仓库
```bash
git clone https://github.com/Redersha/FuZhouPlan_Wiki.git

cd FuZhouPlan_Wiki
```
2. 写作时会用到的一些命令：
::: code-group
```pnpm
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览构建结果
pnpm run preview
```
```npm
# 安装依赖
npm install
# 或简写
npm i

# 启动开发服务器以实时预览修改
npm run dev
# 或使用 start（如果 package.json 中配置了 "start": "npm run dev"）
npm start

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```
```yarn
# 安装依赖
yarn install
# 或简写
yarn

# 启动开发服务器
yarn dev
# 或（较老版本）
yarn run dev

# 构建生产版本
yarn build

# 预览构建结果
yarn preview
```
```yarn modern​
# 安装依赖
yarn install
# 或（推荐使用）
yarn

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build

# 预览构建结果
yarn preview
```
:::

### 贡献本文档

本文档站接受社区贡献。如需提交文档修正或补充新的内容，请通过 [GitHub Issues](https://github.com/Redersha/FuZhouPlan_Wiki/issues) 提交反馈，或直接发起 Pull Request。

### 许可

本项目基于 MIT 许可证 开源。
