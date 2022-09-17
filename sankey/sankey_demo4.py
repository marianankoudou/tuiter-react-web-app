import plotly.graph_objects as go

import plotly.io as pio

pio.renderers.default = "browser"  # also, close opera!

source = [0, 0, 0, 1, 1, 2, 2, 2]
target = [3, 4, 5, 3, 5, 3, 4, 5]
value = [1, 1, 1, 1, 2, 2, 0.5, 1]
label = ['Stomach', 'Lung', 'Brain', 'Gx', 'Gy', 'Gz']

link_colors = ['lightgrey'] * 8
link_colors[1] = '#E18D32'
link_colors[2] = 'rgb(38,105,149)'

link = {'source': source, 'target': target, 'value': value,
        'line': {'color': 'black', 'width': 2},
        'color': link_colors}

node_colors = ['mediumslateblue'] * 3 + ['palegoldenrod'] * 3

node = {'label': label, 'pad': 100, 'thickness': 10,
        'line': {'color': 'black', 'width': 2},
        'color': node_colors}

sk = go.Sankey(link=link, node=node)
fig = go.Figure(sk)
fig.show()
