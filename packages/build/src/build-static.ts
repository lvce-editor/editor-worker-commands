import { join } from 'node:path'
import { root } from './root.ts'
import { cp } from 'node:fs/promises'
import { buildE2eExtensions } from './buildE2eExtensions.ts'

const sharedProcess = await import('@lvce-editor/shared-process')

process.env.PATH_PREFIX = '/editor-commands-worker'
await sharedProcess.exportStatic({
  root,
  extensionPath: '',
})

await buildE2eExtensions()

// await cp(
//   join(root, '.tmp', 'dist', 'dist', 'iframeWorkerMain.js'),
//   join(root, 'dist', commitHash, 'packages', 'iframe-worker', 'dist', 'iframeWorkerMain.js'),
// )

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })
