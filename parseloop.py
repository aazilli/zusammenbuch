import tinycss
parser = tinycss.make_parser('page3')
css = open('cc.css', 'rb').read()
style = parser.parse_stylesheet_bytes(css)
item = style.rules[0].selector[0].value

print(style.rules[0].selector[0])

for rule in style.rules:
    try:
        print(rule.selector.as_css())
    except AttributeError:
        print("""XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        """ + str(rule) + """
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX""")
        pass
