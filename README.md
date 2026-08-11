# Black Souls 2 伴侣测试网站

一个纯静态的在线趣味测试网站：28 道选择题，答完后从 12 位角色中测出与你最契合的“灵魂伴侣”。

在线访问: [https://eden-we.github.io/mbti-test/](https://eden-we.github.io/mbti-test/)

## 判定规则

- 每个角色都有自己的 A / B / C / D 答案分布目标，结果按“你的作答分布和角色目标分布的距离”来决定
- 全部 28 题答完后，先统计 A / B / C / D 的总分布，再和 12 位角色的目标分布做匹配
- 角色列表（首页与结果页展示顺序）：诺登、假海龟、渡渡、柴郡猫、蕾克、比尔、普利凯特、梅贝尔、希夏、班达斯奈奇、贾布加布、贾巴沃克
- 若出现完全相同的匹配距离，会按 `WIN_PRIORITY` 做稳定排序决定最终显示角色

## 本地运行

直接用浏览器打开 `index.html` 即可，或启动本地服务：

```powershell
cd C:/Users/99302/Desktop/mbti-test
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
- `data.js` — 题目库 `QUESTIONS`、角色数据 `CHARACTERS`、目标分布 `CHARACTER_TARGETS`、优先级 `WIN_PRIORITY`
- `app.js` — 答题逻辑、计分、结果渲染

## 自定义

- 修改题目：编辑 `data.js` 中的 `QUESTIONS`
- 修改角色文案与配色：编辑 `data.js` 中的 `CHARACTERS`
- 修改计分规则：编辑 `data.js` 中的 `CHARACTER_TARGETS`，例如 `诺登: [14, 8, 6, 0]`
- 修改并列优先级：编辑 `data.js` 中的 `WIN_PRIORITY`
