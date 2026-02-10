import { resolve } from 'node:path';
import { CSSOptions, defineConfig } from 'vite';

// https://vitejs.dev/config
// 注意是异步加载
export default defineConfig(async () => {
  const vue = (await import('@vitejs/plugin-vue')).default;
  const tailwindcss = (await import('@tailwindcss/vite')).default;
  const autoImport = (await import('unplugin-auto-import/vite')).default;

  return {
    plugins: [
      vue(),
      tailwindcss(),
      autoImport({
        imports: ['vue', 'vue-router', 'vue-i18n', 'pinia', '@vueuse/core'],
        dts: 'renderer/auto-imports.d.ts',
      }),
    ],
    css: {
      transformer: 'lightningcss' as CSSOptions['transformer'],
    },
    // 多入口改造
    build: {
      target: 'es2022',
      // 公共目录
      publicDir: 'public',
      // 多页面：入口文件
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'html/index.html'),
          dialog: resolve(__dirname, 'html/dialog.html'),
          setting: resolve(__dirname, 'html/setting.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@common': resolve(__dirname, 'common'),
        '@main': resolve(__dirname, 'main'),
        '@renderer': resolve(__dirname, 'renderer'),
        '@locales': resolve(__dirname, 'locales'),
      },
    },
  };
});
