个人信息修改位置在 **`src/App.tsx`** 文件中。

## 个人信息修改指南

### 1. **主标题（名字）** 
**第 33 行：**
```tsx
<h1 className='text-5xl font-bold items-center justify-center text-[#E9FFAC] w-auto'>SOUT</h1>
```
修改 `SOUT` 为你的名字。

### 2. **副标题**
**第 36 行：**
```tsx
<h1 className='text-xl font-bold items-center justify-center text-[#E9FFAC]/80'>MAIN HOMEPAGE</h1>
```
修改 `MAIN HOMEPAGE` 为你的副标题描述。

### 3. **链接按钮**
**第 38-40 行：**
```tsx
<a href='https://blog.soout.top' className='btn btn-sm rounded-4xl bg-transparent border-2 border-[#E9FFAC] text-[#E9FFAC] hover:bg-[#E9FFAC] hover:text-black'>BLOG</a>
<a href='https://34.soout.top' className='btn btn-sm rounded-4xl bg-transparent border-2 border-[#E9FFAC] text-[#E9FFAC] hover:bg-[#E9FFAC] hover:text-black'>34</a>
<a href='https://audio.soout.top' className='btn btn-sm rounded-4xl bg-transparent border-2 border-[#E9FFAC] text-[#E9FFAC] hover:bg-[#E9FFAC] hover:text-black'>AUDIO</a>
```
修改：
- `href='...'` - 按钮链接地址
- 按钮文本（如 `BLOG`、`34`、`AUDIO`）

### 4. **网页标题**
**index.html 第 7 行：**
```html
<title>IM SOUT AS U KNOW</title>
```
修改为你的网页标题。

### 5. **颜色主题**（可选）
**颜色代码：** `#E9FFAC`（黄绿色）
可在以下位置修改：
- 第 12 行：`color="#E9FFAC"`
- 第 33, 36 行：`text-[#E9FFAC]`
- 第 38-40 行：`border-[#E9FFAC]` 和 `text-[#E9FFAC]`

### 6. **Favicon（网页图标）**
**index.html 第 5 行：**
```html
<link rel="icon" type="image/svg+xml" href="/16.svg" />
```
修改 `/16.svg` 为你的 favicon 文件路径。

---

**快速修改示例：**
```tsx
// 改成你的信息
<h1>YOUR NAME</h1>  // 改主标题
<h1>YOUR SUBTITLE</h1>  // 改副标题
<a href='https://yourlink.com'>YOUR LINK</a>  // 改链接
```