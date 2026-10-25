# 贡献与发布

## 源码结构

- `theme.css`：完整主题样式，包含可选的 Style Settings 声明。
- `manifest.json`：名称、作者、主题版本与最低 Obsidian 版本。
- `versions.json`：公开主题版本与最低 Obsidian 版本的对应关系。
- `screenshots/`：浅深预览和社区目录缩略图。
- `build.cjs`：生成本地发布文件，无需安装 npm 依赖。

优先使用 Obsidian 原生 CSS 变量；通用布局放在 `body`，颜色放在 `.theme-light` 与 `.theme-dark`。尽量保持选择器简单，允许用户用代码片段覆盖。主题不加载远程资源，也不包含运行脚本。

修改样式时请一并考虑浅深外观、实时预览与阅读视图，并保留原生标题、任务、链接和 Callout 的操作行为。示例和截图使用不含私人信息的内容。

## 本地构建

安装只需要仓库根目录的 `theme.css`、`manifest.json`；只有生成发布目录时才需要 Node.js 18 或更高版本。

```sh
node build.cjs
```

输出目录为 `release/0.1.0/`（随清单版本变化）：

- `theme.css`、`manifest.json`：可直接上传 GitHub Release 的两个文件。
- `Lumen Docs/`：包含安装文件、说明和许可的手动安装文件夹。

## 发布新版本

1. 更新 `manifest.json` 的版本，按需要调整 `minAppVersion`，同步 `versions.json`、CSS 文件头和更新记录。
2. 运行本地构建，提交源码。
3. 为该提交创建与清单一致的标签，如 `0.1.0`；标签不添加 `v` 前缀。
4. 推送到公开 GitHub 仓库后，将标签推送至远端。仓库中的 Release 工作流会创建草稿，并附上 `theme.css` 和 `manifest.json`，随后下载附件核对内容。
5. 核对草稿内容后发布 Release。只有源码 ZIP 不能替代上述两个独立附件。

如果已有 Release 缺少附件，可在 GitHub Actions 的 **Draft theme release → Run workflow** 中填写现有标签（如 `0.1.0`），补传该标签下的安装文件。工作流也会在 Release 发布后核对附件；已存在的 Release 不会被另建为新草稿。README 的英文主页与中文版本应同步更新。

首次申请社区目录收录时，在 [Obsidian Community](https://community.obsidian.md) 连接 GitHub 账户，添加主题，填写公开仓库地址、截图路径 `screenshots/screenshot.png`，选择 Light 与 Dark，并按目录提示完成审核。

## 官方资料

- [主题提交指南](https://docs.obsidian.md/themes/app-themes/submit-theme)
- [主题清单字段](https://docs.obsidian.md/Reference/Manifest)
- [主题维护建议](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Themes/App%20themes/Theme%20guidelines.md)
