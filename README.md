# MBTI 人格测试网站

一个纯静态的在线人格测试网站：28 道选择题，五档同意度，最终给出 16 型人格结果与维度分析。

## 本地运行

直接用浏览器打开 `index.html` 即可，或启动本地服务：

```powershell
cd C:\Users\99302\Desktop\mbti-test
python -m http.server 8000
```

然后访问 http://localhost:8000

## 部署到线上（任选其一）

### GitHub Pages（免费，推荐）
1. 在 GitHub 新建一个仓库，把本文件夹上传
2. 仓库 Settings → Pages → Source 选择 `main` 分支的根目录
3. 完成后访问 `https://你的用户名.github.io/仓库名`

### Vercel / Netlify（免费）
1. 注册 vercel.com 或 netlify.com
2. 选择“Import Project”，导入本项目文件夹/仓库
3. 无需构建命令，直接部署，会自动生成 https 网址

## 文件结构

- `index.html` — 页面结构（首页 / 测试 / 结果三个界面）
- `style.css` — 全部样式与动画
- `data.js` — 题目库、16 型人格数据、选项文案
- `app.js` — 答题逻辑、计分、结果渲染

## 自定义

- 修改题目：编辑 `data.js` 中的 `QUESTIONS`
- 修改人格描述：编辑 `data.js` 中的 `TYPES`
- 计分规则：每题 1–5 分，按“倾向某一端”累加，取每对维度中得分更高的一端组成类型码
