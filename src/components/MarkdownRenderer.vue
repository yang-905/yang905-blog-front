<template>
    <div class="markdown-body" v-html="sanitizedHtml"></div>
</template>

<script>
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight'; // 引入新扩展
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css'; // 可选其他主题，如 'atom-one-dark'

// 配置 marked
marked.use(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        }
    })
);

export default {
    name: 'MarkdownRenderer',
    props: {
        // 要渲染的 Markdown 原始文本
        content: {
            type: String,
            default: ''
        }
    },
    computed: {
        sanitizedHtml() {
            if (!this.content) return '';
            // 2. 直接使用 marked.parse 进行渲染
            const rawHtml = marked.parse(this.content);
            return DOMPurify.sanitize(rawHtml);
        }
    }
};
</script>

<style scoped>
/* 你可以使用 github-markdown-css 提供全局样式，或者直接在此处引入 */
/* @import 'github-markdown-css';   需要 npm install github-markdown-css */
/* 如果不安装，也可以手动复制样式，但推荐用现成库 */
</style>