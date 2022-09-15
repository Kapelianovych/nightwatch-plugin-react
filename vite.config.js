import react from '@vitejs/plugin-react'
import nightwatchPlugin from 'vite-plugin-nightwatch'

export default {
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  plugins: [
    react(),
    nightwatchPlugin({
      componentType: 'react'
    })
  ]
};
