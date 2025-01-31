import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        style={{ width: "40px" }}
        src="/uploadfast.webp"
        alt="Uploadfast logo"
      />
      <span>Upload-Fast <small>docs</small></span>
    </div>
  ),
  project: {
    link: 'https://github.com/upload-fast',
  },
  docsRepositoryBase: 'https://github.com/upload-fast/docs',
  footer: {
    text: <div>&copy; {new Date().getFullYear()} UploadFast.</div>,
  },
}

export default config
