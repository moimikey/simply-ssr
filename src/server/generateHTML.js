import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { renderToStaticMarkup } from 'react-dom/server'

export function generateHtml (markup, selector, headTags) {
  const templatePath = path.resolve('dist/client/index.html')
  const HTML_TEMPLATE = fs.readFileSync(templatePath).toString()
  const $template = cheerio.load(HTML_TEMPLATE)
  $template('head').append(renderToStaticMarkup(headTags))
  $template(selector).html(markup)
  return $template.html()
}
