import { join } from 'node:path'
import { root } from './root.ts'
import { cp } from 'node:fs/promises'
import { buildE2eExtensions } from './buildE2eExtensions.ts'

const sharedProcess = await import('@lvce-editor/shared-process')

process.env.PATH_PREFIX = '/editor-worker-commands'
const { commitHash } = await sharedProcess.exportStatic({
  root,
  extensionPath: '',
})

await buildE2eExtensions()

await cp(
  join(root, '.tmp', 'dist', 'dist', 'editorCommandsWorkerMain.js'),
  join(root, 'dist', commitHash, 'packages', 'editor-commands-worker', 'dist', 'editorCommandsWorkerMain.js'),
)

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })
