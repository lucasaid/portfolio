import CMS from 'netlify-cms'

import WorkPagePreview from './preview-templates/WorkPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('work', WorkPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
