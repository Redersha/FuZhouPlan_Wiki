# 解析机 (Resolver)

功能：解析未识别的DNA样本，使其成为可用的已解析DNA罐

能耗：每次操作消耗 50000 FE（高耗能），最大储能 500000 FE
处理时间：600 tick（约30秒）

槽位：
* 1个发光蓝染料输入槽
* 1个未解析DNA罐输入槽
* 1个输出槽（产出已解析DNA罐）

工作原理：将 UnresolvedDNACanItem（未解析DNA罐）+ GlowingBlueDyeItem（发光蓝染料）转化为对应生物类型的 ResolvedDNACan（已解析DNA罐）