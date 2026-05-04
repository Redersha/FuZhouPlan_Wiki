# 游戏性内容/方块 - 绿浆果从 - green_berry_bush
生长在平原的小型灌木，成熟后可收获绿浆果。

## 材质
**材质等资源文件加载较慢，速度视网络质量而定**
![生长的第三阶段](https://github.com/cenmix/FuZhouPlan/blob/develop-cenmix/src/main/resources/assets/fuzhouplan/textures/block/green_berry_bush_stage3.png?raw=true)

## ID
`block.fuzhouplan.green_berry_bush`

## 注意
- 自然生成于平原生物群系
- 共有 4 个生长阶段（AGE_3 属性，0-3，0、1、2、3）
- 生长需要上方[光照等级](https://minecraft.fandom.com/zh/wiki/%E4%BA%AE%E5%BA%A6) ≥ 9
- 随机生长概率为 20%（random.nextInt(5) == 0）
- 成熟后（阶段 2-3）右键收获 1-2 个绿浆果
- 收获后重置为阶段 1，可持续采摘
- 可使用骨粉加速生长
- 幼苗期碰撞箱较小，成熟后变大