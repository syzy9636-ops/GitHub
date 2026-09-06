# 王恩涛个人网站更新包

本更新包对应最初展示的第一版网页，已经包含本轮确认后的文案、排版和头像视差效果；首页米白卡片底部的岗位无关图形已删除。

## 方案一：替换源码（推荐）

在原项目根目录中替换以下两个文件：

- `src/main.jsx`
- `src/styles.css`

替换后按原项目流程重新构建：

```bash
pnpm install
pnpm build
```

无需替换：

- `index.html`
- `package.json`
- `pnpm-lock.yaml`
- `public/assets/*`

不要复制或提交 `node_modules`。

## 方案二：使用 Git 补丁

把 `website-update.patch` 放在第一版项目根目录，然后执行：

```bash
git apply --check website-update.patch
git apply website-update.patch
```

该补丁只修改 `src/main.jsx` 和 `src/styles.css`。如果检查不通过，说明目标源码已经偏离最初版本，请直接采用“方案一”覆盖这两个源码文件。

## 方案三：直接部署静态网页

如果服务器只接收打包后的网页，请用本包内的 `dist` **完整替换**服务器原有的 `dist` 目录，不要只覆盖其中部分文件。构建后的 CSS 和 JavaScript 文件名带内容哈希，混用新旧文件可能导致页面样式或脚本失效。

## 本次已包含的修改

- “视效制作”改为“视效合成”
- 首页标题改为“次元壁维修工”
- 新增“图层叠出艺术感，绿幕抠出安全感”
- 删除首页米白卡片底部与岗位主题不匹配的几何图形
- 头像增加与首页标题一致的指针视差效果
- 作品区标题改为“合成两小时 / 渲染一整夜”
- 技能区两行标题增加行间距
- 联系区标题改为“来，连个节点？”
