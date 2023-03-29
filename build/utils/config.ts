import path from 'path'
import { outDir } from './paths'

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'es',
    output: {
      name: 'es',
      path: path.resolve(outDir, 'es')
    },
    bundle: {
      path: '@edy-plus/es'
    }
  },
  cjs: {
    module: 'CommonJsS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib')
    },
    bundle: {
      path: '@edy-plus/lib'
    }
  },
}

export type BuildConfig = typeof buildConfig


