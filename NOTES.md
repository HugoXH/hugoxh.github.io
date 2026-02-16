# Hexo 双分支博客使用指南

## 分支结构

| 分支 | 用途 | 内容 |
|------|------|------|
| `hexo` | 源文件分支 | _config.yml, source/, themes/, scaffolds/ 等 |
| `master` | 静态文件分支 | hexo generate 生成的 public/ 内容，GitHub Pages 部署用 |

## 工作原理

```
hexo 分支 (源文件)          master 分支 (静态文件)
      |                            |
      | hexo generate              |
      +-----------> public/        |
      |                            |
      | hexo deploy                |
      +--------------------------->+
                                   |
                            GitHub Pages 自动部署
```

## 日常使用流程

```bash
# 1. 进入项目目录，确保在 hexo 分支
cd ~/code/hugoxh.github.io
git checkout hexo

# 2. 写新文章
hexo new "文章标题"
# 文件会生成在 source/_posts/文章标题.md

# 3. 本地预览
hexo server
# 浏览器访问 http://localhost:4000

# 4. 生成并部署到 master 分支
hexo generate   # 生成静态文件到 public/
hexo deploy     # 把 public/ 内容推送到 master 分支

# 5. 提交源文件到 hexo 分支
git add .
git commit -m "新增文章：xxx"
git push
```

## 关键配置 (_config.yml)

```yaml
# 网站信息
title: Hugo's Blog
author: HugoXH
language: zh-CN
url: https://hugoxh.github.io

# 部署配置（自动推送到 master）
deploy:
  type: git
  repo: git@github.com:HugoXH/hugoxh.github.io.git
  branch: master
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `hexo new "标题"` | 新建文章 |
| `hexo new page "页面名"` | 新建页面 |
| `hexo generate` | 生成静态文件 |
| `hexo server` | 本地预览 |
| `hexo deploy` | 部署到 master |
| `hexo clean` | 清除缓存和静态文件 |

## 依赖插件

- `hexo-deployer-git`: 用于部署到 Git 仓库

```bash
npm install hexo-deployer-git --save
```

## 注意事项

1. **始终在 hexo 分支工作**：写文章、改配置都在 hexo 分支
2. **master 分支不要手动改**：由 `hexo deploy` 自动管理
3. **记得双提交**：
   - `hexo deploy` → 更新 master（网站内容）
   - `git push` → 更新 hexo（源文件备份）
4. **换电脑时**：克隆 hexo 分支，`npm install` 安装依赖即可继续工作
