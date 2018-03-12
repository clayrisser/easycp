#!/usr/bin/env python3

from recommonmark.transform import AutoStructify
from recommonmark.parser import CommonMarkParser

author = 'Jam Risser'

copyright = '2018, Jam Risser'

exclude_patterns = []

extensions = [
    'sphinx.ext.mathjax',
    'sphinx_js'
]

html_static_path = ['_static']

html_theme = 'sphinx_rtd_theme'

htmlhelp_basename = 'easycpdoc'

js_source_path = './src'

language = None

master_doc = 'index'

latex_documents = [(
    master_doc,
    'easycp.tex',
    'Easycp Documentation',
    'Jam Risser',
    'manual'
)]

latex_elements = {
    'papersize': 'letterpaper',
    'pointsize': '10pt',
    'preamble': '',
    'figure_align': 'htbp'
}

man_pages = [(
    master_doc,
    'easycp',
    'Easycp Documentation',
    [author],
    1
)]

needs_sphinx = '1.0'

primary_domain = 'js'

project = 'easycp'

pygments_style = 'sphinx'

release = '0.0.2'

source_parsers = {
    '.md': CommonMarkParser
}

source_suffix = ['.rst', '.md']

templates_path = ['_templates']

texinfo_documents = [(
    master_doc,
    'easycp',
    'Easycp Documentation',
    author,
    'easycp',
    'Easy child process',
    'Miscellaneous'
)]

todo_include_todos = False

version = '0.0.2'

def setup(app):
    app.add_config_value('recommonmark_config', {
        'auto_toc_tree_section': 'Content',
        'enable_auto_doc_ref': True,
        'enable_auto_toc_tree': True,
        'enable_eval_rst': True,
        'enable_inline_math': True,
        'enable_math': True
    }, True)
    app.add_stylesheet('styles/main.css')
    app.add_javascript('scripts/main.js')
    app.add_transform(AutoStructify)
