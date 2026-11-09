# Lumen Docs

[English](README.md) · [简体中文](README.zh-CN.md)

[![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Freleases.obsidian.md%2Fstats%2Ftheme&query=%24%5B%22Lumen%20Docs%22%5D.download&label=Obsidian%20downloads&color=2563eb&logo=obsidian&logoColor=white&style=flat-square)](https://community.obsidian.md/themes/lumen-docs)

为 Obsidian 设计的轻量文档主题。云白页面、墨蓝文档标题、蓝色章节标题与鲜明的语义标注构成具有辨识度的文档界面；深色外观采用夜蓝配色。

支持浅色与深色外观，适用于实时预览和阅读视图。主题使用原生 CSS 变量，不需要额外插件、字体或网络服务。

当前版本：**0.1.3**。

0.1.3 带来接近白色的浅色侧栏，以及更柔和的文档排版。安装文件可从 [Releases](https://github.com/Beta-Zheng/lumen-docs/releases/latest) 下载。

## 预览

以下截图使用 Lumen Docs 0.1.3，在 Obsidian 1.15.0 的独立示例库中截取。文件名与文档均为演示内容。

### 浅色

![Lumen Docs 0.1.3 浅色工作区与接近白色的侧栏](screenshots/interface-light.png?v=0.1.3-clean)

[文档排版](screenshots/light.png?v=0.1.3-clean) · [内容细节](screenshots/details-light.png?v=0.1.3-clean) · [高亮块配色](screenshots/callouts-light.png?v=0.1.3-clean)

### 深色

![Lumen Docs 0.1.3 深色工作区](screenshots/interface-dark.png?v=0.1.3-clean)

[文档排版](screenshots/dark.png?v=0.1.3-clean) · [内容细节](screenshots/details-dark.png?v=0.1.3-clean) · [高亮块配色](screenshots/callouts-dark.png?v=0.1.3-clean)

## 安装与使用

需要 **Obsidian 1.13.0 或更高版本**。

### 手动安装

1. 从同一个 [GitHub Release](https://github.com/Beta-Zheng/lumen-docs/releases/latest) 下载 `theme.css` 和 `manifest.json`。
2. 在笔记库配置目录中创建 `.obsidian/themes/Lumen Docs/`，将两个文件放入其中。
3. 打开 Obsidian「设置 → 外观 → 主题」，选择 **Lumen Docs**。如果没有出现在列表中，重新打开设置或重启 Obsidian。
4. 按偏好选择浅色、深色或跟随系统外观。

```text
你的笔记库/
└─ .obsidian/
   └─ themes/
      └─ Lumen Docs/
         ├─ manifest.json
         └─ theme.css
```

如果更改了 Obsidian 的配置目录名称，请使用实际的配置目录。安装不需要 Node.js，也无需启用第三方插件。

升级时覆盖上述两个文件；切换为其他主题即可还原外观。主题不会改写 Markdown 笔记。

### 快速体验

在新笔记中粘贴下面的内容，切换实时预览与阅读视图查看：

````markdown
## 写清楚，也读得舒服

保留自然的 **加粗** 和 *斜体*，用 ==高亮== 标记重点。

- [ ] 整理想法
- [x] 保存今天的记录

> 引用使用细蓝线与安静的灰蓝底色，正文保持清晰。

> [!info] 补充背景
> 用信息蓝标注关键事实与来源。

> [!success] 已完成
> 用成功绿记录进展与结论。

> [!note|compact]
> 图标与正文同行的紧凑提示。

> [!warning]- 需要注意
> 带标题和折叠操作的提示块。

```javascript
const message = "Keep writing";
console.log(message);
```

| 内容 | 表现 |
| --- | --- |
| 表格 | 蓝调表头、清晰网格与舒适留白 |
````

## 主题设计

### 以内容为中心

- **标题**：墨蓝文档标题、深蓝章节标题与灰蓝小标题，结合字号、字重和间距表达层级；章节色独立于更明亮的链接色，最小一级标题保持正文字号。
- **正文**：默认可读行宽为 800px、行高为 1.7；字体与字号由 Obsidian 外观设置决定。
- **强调**：蓝色用于链接、任务勾选和交互状态，琥珀黄用于文字高亮。
- **引用**：细蓝线与灰蓝底色，正文保持清晰，保留用户明确写下的斜体。
- **表格**：浅蓝表头、清晰网格线和单元格留白建立结构。
- **代码**：中性底色搭配按角色区分的语法色；行内代码保持安静。
- **界面**：浅色侧栏接近白色，配合淡蓝灰选中底色与蓝色活动标记；深色保留夜蓝层次。
- **细节**：标签、笔记嵌入、脚注、菜单、候选项与键盘焦点采用同一套灰阶和蓝色强调；结构边框使用中性色，避免处处强调。
- **密度**：桌面文件列表与大纲可选择舒适或紧凑行间距，正文排版与移动端触控尺寸保持原生行为。
- **窄屏**：缩小页边距和提示块内边距，长标题与标签可自然换行。

任务完成后仍保留可读的灰色文字；选中文字时使用明确的前景色和蓝色选区背景。

### 提示块

保留 Obsidian 原生 Callout 的图标、自定义标题、折叠和嵌套行为。普通标注块采用柔和语义底色、3px 实色色条与较轻边框；警告和风险类保留更醒目的底色与 4px 色条，让重要信息有明确层级。标题与图标随所在块的字号缩放，正文保持中性色。信息蓝、提示青、成功绿、警告橙、危险红、示例紫分别表达不同用途。

可在 Style Settings 中选择「清晰柔和」（默认）、「重点强调」或「简洁线框」。「重点强调」保留先前更醒目的 4px 色条与彩色边框。三种外观都保留语义色、标题、折叠和嵌套行为；嵌套底色块保持各自配色，避免半透明底色层层叠加。

紧凑提示使用原生元数据：

```markdown
> [!note|compact]
> 适合无需可见标题的简短提示。
```

紧凑形式仅应用于不可折叠的 `note` 块，会收起可见标题。需要显示标题时使用普通 `[!note] 标题`；添加 `+` 或 `-` 折叠标记后会保留标题与折叠按钮。

## 色彩方案

### 云白蓝基础色

| 用途 | 浅色 | 深色 |
| --- | --- | --- |
| 正文背景 | `#FFFFFF` | `#172033` |
| 侧栏背景 | `#F9FBFD` | `#111A2B` |
| 正文文字 | `#1F2329` | `#E2EAF6` |
| 次要文字 | `#596B85` | `#AEBBD0` |
| 文档标题 | `#173B70` | `#D1E2FF` |
| 章节标题 | `#2458AE` | `#A3C2F5` |
| 表头底色 | `#E4EDFF` | `#223D61` |
| 链接与文字强调 | `#1F5ED6` | `#91B9FF` |
| 主按钮填充 | `#2563EB` | `#3B6ED6` |
| 文字高亮背景 | `#FFE38C` | `#5A4519` |

文字强调色与按钮填充色分别定义；深色模式使用更亮的链接色，同时保留适合白色文字的蓝色按钮。

### Callout 语义色

| 角色 | 常用类型 | 浅色 | 深色 |
| --- | --- | --- | --- |
| 信息蓝 | `note`、`info`、`todo`、`summary` | `#1F5ED6` | `#91B9FF` |
| 提示青 | `tip`、`hint` | `#086D75` | `#6CCECC` |
| 成功绿 | `success`、`check`、`done` | `#1F774D` | `#82D8A4` |
| 警告橙 | `warning`、`question` | `#965000` | `#F4C16F` |
| 危险红 | `danger`、`error`、`failure`、`bug` | `#B53147` | `#FF9BAE` |
| 示例紫 | `important`、`example` | `#6D46BC` | `#C7ABFF` |
| 引用灰 | `quote`、`cite` | `#4E607A` | `#B3C4DF` |

同类的原生别名遵循相同颜色。自定义 Callout 可以继续通过 `--callout-color` 和 `--callout-icon` 定义自己的颜色与图标。

### 代码语法色

| 语法角色 | 浅色 | 深色 |
| --- | --- | --- |
| 关键字 | `#6742B8` | `#C2A4F4` |
| 函数 | `#1F5ED6` | `#A8C5FF` |
| 字符串 | `#236D4B` | `#9FD6B0` |
| 数值与重要标记 | `#9A4B15` | `#EFBA86` |
| 注释 | `#5B6C84` | `#9AA6B8` |
| 运算符与标点 | `#536075` | `#B3BFD1` |

语法色使用 Obsidian 的 `--code-*` 变量。编辑视图与阅读视图使用不同的高亮引擎，同一语言的分词与着色细节可能略有差异。

## 个性化设置

### 字体、字号与行宽

字体和字号在 Obsidian「设置 → 外观」中调整。需要主题设定的正文宽度时，请启用编辑器的可读行宽（Readable line length）选项。

可选安装 **Style Settings**，在「Lumen Docs · 清简文档」中调整：

- 正文宽度：560–1200px，默认 800px。
- 正文行高：1.4–2.2，默认 1.7。
- 段落间距：正文字号的 0.5–1.2 倍，默认 0.8。间距随正文字号变化，不受标题字号影响。
- 标题比例：0.9–1.2，默认 1；六级标题在实时预览与阅读视图中同步调整。
- 标注块外观：清晰柔和（默认）、重点强调或简洁线框，已有 `lumen-callout-soft` 设置保持兼容。
- 界面密度：舒适（默认）或紧凑，仅调整桌面文件列表与大纲的行间距，不缩小正文或移动端触控区域。
- 表格斑马纹：默认关闭，可全局启用，也可用 `lumen-striped-tables` 只应用于单篇笔记。

不安装该插件也可以正常使用默认样式。

表格在实时预览和阅读视图中使用一致的字号、单元格间距，并提供行悬停提示。阅读页中的宽表可以横向滚动，编辑器保留原生的列操作和单元格选区。

单篇笔记可在属性 **cssclasses** 中添加以下可选类，可以组合使用：

| 类名 | 效果 |
| --- | --- |
| `lumen-wide` | 将可读行宽调整为 1100px，适合表格与技术文档；需要启用可读行宽。 |
| `lumen-compact` | 收紧段落间距，使用 1.55 行高与较小的表格内边距。 |
| `lumen-striped-tables` | 为当前笔记的表格添加隔行底色。 |
| `lumen-image-paper` | 为图片增加白色背景，适合按纸面配色绘制的透明图表；保留图片原色。 |

```yaml
---
cssclasses:
  - lumen-wide
  - lumen-compact
  - lumen-striped-tables
---
```

### CSS 代码片段

在笔记库 `.obsidian/snippets/lumen-custom.css` 中添加以下内容，再到「设置 → 外观 → CSS 代码片段」启用：

```css
body {
  --lumen-page-width: 880px;
  --lumen-line-height: 1.8;
  --lumen-paragraph-spacing: 0.9;
  --lumen-heading-scale: 1.05;
}
```

优先用代码片段覆盖变量，便于保留个人设置和升级主题。

图片保留指定的尺寸和原色，原生图片嵌入及独立图片采用轻边界与圆角。需要图注时显式添加，不会把替代文本自动变成可见图注：

```markdown
![[示意图.png|480]]

<div class="lumen-caption">图 1 · 想法之间的连接。</div>
```

标准 HTML 的 `figure`、`figcaption` 也有对应样式。整篇笔记嵌入使用克制的卡片，块引用使用更轻的引用线，保留返回来源的原生操作。

## 使用说明

- 主题为文档阅读设计，提供窄屏间距适配；第三方插件和自定义布局可能需要单独调整。
- 主题只负责外观，不提供文档同步、协同编辑、浮动编辑工具栏等功能。
- 其他 CSS 片段或插件样式可能覆盖主题设置；遇到冲突时可暂时停用相关样式以定位原因。
- 内置字体来自系统与 Obsidian 的字体设置；主题不加载外部字体、图片或脚本。
- 反馈问题时，请附上 Obsidian 版本、浅深模式、相关插件或片段信息，以及去除私人内容后的截图。

## 许可与贡献

采用 [MIT License](LICENSE)。欢迎提出问题和改进建议；源码结构与发布方式见 [贡献说明](CONTRIBUTING.md)。
