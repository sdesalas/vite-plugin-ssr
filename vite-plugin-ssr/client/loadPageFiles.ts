import { loadPageView } from '../shared/loadPageView'
import { objectAssign } from '../shared/utils'
import { getAllPageFiles } from '../shared/getPageFiles'

export { loadPageFiles }

async function loadPageFiles(pageContext: { _pageId: string }) {
  const pageId = pageContext._pageId
  const pageFiles = {}
  const allPageFiles = await getAllPageFiles()
  objectAssign(pageFiles, { _allPageFiles: allPageFiles })
  const pageView = await loadPageView({ _pageId: pageId, _allPageFiles: allPageFiles })
  objectAssign(pageFiles, pageView)
  return pageFiles
}