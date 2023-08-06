import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@lib", replacement: "/src/lib" },
      { find: "@themeManagment", replacement: "/src/themeManagment" },
      { find: "@services", replacement: "/src/services" },
  ],
    
  },
  css: {
    modules: {
      generateScopedName: isDevelopment
        ? "[name]__[local]__[hash:base64:5]"
        : "[hash:base64:5]",
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id, { getModuleInfo }) {
          if (customIncludes(id, 'node_modules') && getModuleInfo(id).isEntry === false) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        chunkFileNames: 'index-[hash].js', // Optionally, you can customize chunk filenames
      },
    },
  },
  
}

}
) 
function customIncludes(str: string, substring: string): boolean {
  for (let i = 0; i <= str.length - substring.length; i++) {
    let found = true;
    for (let j = 0; j < substring.length; j++) {
      if (str[i + j] !== substring[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return true;
    }
  }
  return false;
}

